import { Prisma, Session } from "@prisma/client";
import cuid from "cuid";
import { SessionsRepository } from "../sessions-repository";

export class InMemorySessionsRepository implements SessionsRepository {
  public items: Session[] = [];

  async create(data: Prisma.SessionUncheckedCreateInput) {
    const session = {
      id: cuid(),
      session_token: data.session_token,
      user_id: data.user_id,
      expires: data.expires,
    } as Session;

    this.items.push(session);

    return session;
  }

  async findSessionByToken(session_token: string) {
    const session = this.items.find(
      (item) => item.session_token === session_token
    );

    if (!session) {
      return null;
    }

    return session;
  }

  async update(
    session_token: string,
    data: Prisma.SessionUncheckedUpdateInput
  ) {
    const sessionIndex = this.items.findIndex(
      (item) => item.session_token === session_token
    );

    if (sessionIndex >= 0) {
      this.items[sessionIndex] = {
        ...this.items[sessionIndex],
        ...Object.fromEntries(
          Object.entries(data).filter((value) => value[1] !== undefined)
        ),
      };
    }

    const session = this.items[sessionIndex];

    return session;
  }

  async delete(session_token: string) {
    const sessionIndex = this.items.findIndex(
      (item) => item.session_token === session_token
    );

    const session = this.items[sessionIndex];

    if (sessionIndex >= 0) {
      this.items.splice(sessionIndex, 1);
    }

    return session;
  }
}
