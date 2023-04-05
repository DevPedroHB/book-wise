import { NextApiRequest, NextApiResponse } from "next";
import { Adapter } from "next-auth/adapters";
import { api } from "./axios";

export function ApiAdapter(req: NextApiRequest, res: NextApiResponse): Adapter {
  return {
    async createUser(user) {
      let response = await api.post("users", {
        name: user.name,
        email: user.email,
        avatar_url: user.avatar_url,
      });

      if (response.status === 409) {
        response = await api.put(`users/${response.data.user.id}`, {
          name: user.name,
          email: user.email,
          avatar_url: user.avatar_url,
        });
      }

      return {
        id: response.data.user.id,
        name: response.data.user.name,
        email: response.data.user.email,
        emailVerified: null,
        avatar_url: response.data.user.avatar_url,
      };
    },

    async getUser(id) {
      const { data } = await api.get(`users/${id}`);

      if (!data.user) {
        return null;
      }

      return {
        id: data.user.id,
        name: data.user.name,
        email: data.user.email,
        emailVerified: null,
        avatar_url: data.user.avatar_url,
      };
    },

    async getUserByEmail(email) {
      const { data } = await api.get(`users/email/${email}`);

      if (!data.user) {
        return null;
      }

      return {
        id: data.user.id,
        name: data.user.name,
        email: data.user.email,
        emailVerified: null,
        avatar_url: data.user.avatar_url,
      };
    },

    async getUserByAccount({ provider, providerAccountId }) {
      const { data } = await api.get(
        `account/${provider}/${providerAccountId}`
      );

      if (!data.user) {
        return null;
      }

      return {
        id: data.user.id,
        name: data.user.name,
        email: data.user.email,
        emailVerified: null,
        avatar_url: data.user.avatar_url,
      };
    },

    async updateUser(user) {
      const { data } = await api.put(`user/${user.id}`, {
        name: user.name,
        email: user.email,
        avatar_url: user.avatar_url,
      });

      return {
        id: data.user.id,
        name: data.user.name,
        email: data.user.email,
        emailVerified: null,
        avatar_url: data.user.avatar_url,
      };
    },

    async linkAccount(account) {
      await api.post("account", {
        user_id: account.userId,
        type: account.type,
        provider: account.provider,
        provider_account_id: account.providerAccountId,
        refresh_token: account.refresh_token,
        access_token: account.access_token,
        expires_at: account.expires_at,
        token_type: account.token_type,
        scope: account.scope,
        id_token: account.id_token,
        session_state: account.session_state,
      });
    },

    async createSession({ sessionToken, userId, expires }) {
      await api.post("session", {
        user_id: userId,
        expires,
        session_token: sessionToken,
      });

      return {
        userId,
        sessionToken,
        expires,
      };
    },

    async getSessionAndUser(sessionToken) {
      const { data } = await api.get(`session/${sessionToken}`);

      if (!data.session || !data.user) {
        return null;
      }

      return {
        session: {
          userId: data.session.user_id,
          expires: data.session.expires,
          sessionToken: data.session.session_token,
        },

        user: {
          id: data.user.id,
          name: data.user.name,
          email: data.user.email,
          emailVerified: null,
          avatar_url: data.user.avatar_url,
        },
      };
    },

    async updateSession({ sessionToken }) {
      const { data } = await api.put(`session/${sessionToken}`);

      return {
        sessionToken: data.session.session_token,
        userId: data.session.user_id,
        expires: data.session.expires,
      };
    },

    async deleteSession(sessionToken) {
      await api.delete(`session/${sessionToken}`);
    },
  };
}
