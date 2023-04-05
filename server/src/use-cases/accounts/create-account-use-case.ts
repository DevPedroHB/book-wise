import { AccountsRepository } from "@/repositories/accounts-repository";
import { Account } from "@prisma/client";

interface CreateAccountUseCaseRequest {
  user_id: string;
  type: string;
  provider: string;
  provider_account_id: string;
  refresh_token?: string;
  access_token?: string;
  expires_at?: number;
  token_type?: string;
  scope?: string;
  id_token?: string;
  session_state?: string;
}

interface CreateAccountUseCaseResponse {
  account: Account;
}

export class CreateAccountUseCase {
  constructor(private accountsRepository: AccountsRepository) {}

  async execute({
    user_id,
    type,
    provider,
    provider_account_id,
    refresh_token,
    access_token,
    expires_at,
    token_type,
    scope,
    id_token,
    session_state,
  }: CreateAccountUseCaseRequest): Promise<CreateAccountUseCaseResponse> {
    const account = await this.accountsRepository.create({
      user_id,
      type,
      provider,
      provider_account_id,
      refresh_token,
      access_token,
      expires_at,
      token_type,
      scope,
      id_token,
      session_state,
    });

    return {
      account,
    };
  }
}
