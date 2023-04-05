import { Account, Prisma } from "@prisma/client";
import cuid from "cuid";
import { AccountsRepository } from "../accounts-repository";

export class InMemoryAccountsRepository implements AccountsRepository {
  public items: Account[] = [];

  async create(data: Prisma.AccountUncheckedCreateInput) {
    const account = {
      id: cuid(),
      user_id: data.user_id,
      type: data.type,
      provider: data.provider,
      provider_account_id: data.provider_account_id,
      refresh_token: data.refresh_token,
      access_token: data.access_token,
      expires_at: data.expires_at,
      token_type: data.token_type,
      scope: data.scope,
      id_token: data.id_token,
      session_state: data.session_state,
    } as Account;

    this.items.push(account);

    return account;
  }

  async findAccountByProvider(provider: string, provider_account_id: string) {
    const account = this.items.find(
      (item) =>
        item.provider === provider &&
        item.provider_account_id === provider_account_id
    );

    if (!account) {
      return null;
    }

    return account;
  }
}
