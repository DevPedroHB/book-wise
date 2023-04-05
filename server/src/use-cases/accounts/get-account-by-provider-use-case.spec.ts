import { InMemoryAccountsRepository } from "@/repositories/in-memory/in-memory-accounts-repository";
import { beforeEach, describe, expect, it } from "vitest";
import { ResourceNotFoundError } from "../errors/resource-not-found-error";
import { GetAccountByProviderUseCase } from "./get-account-by-provider-use-case";

let accountsRepository: InMemoryAccountsRepository;
let sut: GetAccountByProviderUseCase;

describe("Get Account By Provider Use Case", () => {
  beforeEach(() => {
    accountsRepository = new InMemoryAccountsRepository();
    sut = new GetAccountByProviderUseCase(accountsRepository);
  });

  it("should be able to get account by provider", async () => {
    const accountCreated = await accountsRepository.create({
      user_id: "user_id",
      type: "type",
      provider: "provider",
      provider_account_id: "provider_account_id",
      refresh_token: "refresh_token",
      access_token: "access_token",
      expires_at: 2023,
      token_type: "token_type",
      scope: "scope",
      id_token: "id_token",
      session_state: "session_state",
    });

    const { account } = await sut.execute({
      provider: accountCreated.provider,
      provider_account_id: accountCreated.provider_account_id,
    });

    expect(account.id).toEqual(expect.any(String));
  });

  it("should not be able to get account with wrong provider", async () => {
    await expect(() =>
      sut.execute({
        provider: "non-existing-provider",
        provider_account_id: "non-existing-provider-account-id",
      })
    ).rejects.toBeInstanceOf(ResourceNotFoundError);
  });
});
