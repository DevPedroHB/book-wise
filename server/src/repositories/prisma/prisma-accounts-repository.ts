import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { AccountsRepository } from "../accounts-repository";

export class PrismaAccountsRepository implements AccountsRepository {
  async create(data: Prisma.AccountUncheckedCreateInput) {
    const account = await prisma.account.create({
      data,
    });

    return account;
  }

  async findAccountByProvider(provider: string, provider_account_id: string) {
    const account = await prisma.account.findUnique({
      where: {
        provider_provider_account_id: {
          provider,
          provider_account_id,
        },
      },
      include: {
        user: true,
      },
    });

    return account;
  }
}
