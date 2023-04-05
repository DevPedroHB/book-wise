import { Account, Prisma } from "@prisma/client";

export interface AccountsRepository {
  create(data: Prisma.AccountUncheckedCreateInput): Promise<Account>;
  findAccountByProvider(
    provider: string,
    provider_account_id: string
  ): Promise<Account | null>;
}
