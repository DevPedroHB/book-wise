import { InMemorySessionsRepository } from "@/repositories/in-memory/in-memory-sessions-repository";
import { beforeEach, describe, expect, it } from "vitest";
import { ResourceNotFoundError } from "../errors/resource-not-found-error";
import { GetSessionByTokenUseCase } from "./get-session-by-token-use-case";

let sessionsRepository: InMemorySessionsRepository;
let sut: GetSessionByTokenUseCase;

describe("Get Session By Token Use Case", () => {
  beforeEach(() => {
    sessionsRepository = new InMemorySessionsRepository();
    sut = new GetSessionByTokenUseCase(sessionsRepository);
  });

  it("should be able to get session by token", async () => {
    const sessionCreated = await sessionsRepository.create({
      session_token: "session_token",
      user_id: "user_id",
      expires: new Date(),
    });

    const { session } = await sut.execute({
      session_token: sessionCreated.session_token,
    });

    expect(session.id).toEqual(expect.any(String));
  });

  it("should not be able to get session with wrong token", async () => {
    await expect(() =>
      sut.execute({
        session_token: "non-existing-session-token",
      })
    ).rejects.toBeInstanceOf(ResourceNotFoundError);
  });
});
