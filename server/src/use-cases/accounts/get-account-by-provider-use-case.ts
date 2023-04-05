import { AccountsRepository } from "@/repositories/accounts-repository";
import { Account } from "@prisma/client";
import { ResourceNotFoundError } from "../errors/resource-not-found-error";

interface GetAccountByProviderUseCaseRequest {
  provider: string;
  provider_account_id: string;
}

interface GetAccountByProviderUseCaseResponse {
  account: Account;
}

export class GetAccountByProviderUseCase {
  constructor(private accountsRepository: AccountsRepository) {}

  async execute({
    provider,
    provider_account_id,
  }: GetAccountByProviderUseCaseRequest): Promise<GetAccountByProviderUseCaseResponse> {
    const account = await this.accountsRepository.findAccountByProvider(
      provider,
      provider_account_id
    );

    if (!account) {
      throw new ResourceNotFoundError();
    }

    return {
      account,
    };
  }
}
