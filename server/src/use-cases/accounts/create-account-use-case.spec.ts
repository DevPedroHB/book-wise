import { InMemoryAccountsRepository } from "@/repositories/in-memory/in-memory-accounts-repository";
import { beforeEach, describe, expect, it } from "vitest";
import { CreateAccountUseCase } from "./create-account-use-case";

let accountsRepository: InMemoryAccountsRepository;
let sut: CreateAccountUseCase;

describe("Create Account Use Case", () => {
  beforeEach(() => {
    accountsRepository = new InMemoryAccountsRepository();
    sut = new CreateAccountUseCase(accountsRepository);
  });

  it("should be able to create a new account", async () => {
    const { account } = await sut.execute({
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

    expect(account.id).toEqual(expect.any(String));
  });
});
