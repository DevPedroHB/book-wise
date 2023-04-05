import { InMemorySessionsRepository } from "@/repositories/in-memory/in-memory-sessions-repository";
import { beforeEach, describe, expect, it } from "vitest";
import { SessionAlreadyExistsError } from "../errors/session-already-exists";
import { CreateSessionUseCase } from "./create-session-use-case";

let sessionsRepository: InMemorySessionsRepository;
let sut: CreateSessionUseCase;

describe("Create Session Use Case", () => {
  beforeEach(() => {
    sessionsRepository = new InMemorySessionsRepository();
    sut = new CreateSessionUseCase(sessionsRepository);
  });

  it("should be able to create a new session", async () => {
    const { session } = await sut.execute({
      session_token: "session_token",
      user_id: "user_id",
      expires: new Date(),
    });

    expect(session.id).toEqual(expect.any(String));
  });

  it("should not be able to create a new session with the same token", async () => {
    const session_token = "session_token";

    await sut.execute({
      session_token,
      user_id: "user_id",
      expires: new Date(),
    });

    await expect(() =>
      sut.execute({
        session_token,
        user_id: "user_id",
        expires: new Date(),
      })
    ).rejects.toBeInstanceOf(SessionAlreadyExistsError);
  });
});
