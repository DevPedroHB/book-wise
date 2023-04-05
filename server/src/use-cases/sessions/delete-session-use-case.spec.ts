import { InMemorySessionsRepository } from "@/repositories/in-memory/in-memory-sessions-repository";
import { beforeEach, describe, expect, it } from "vitest";
import { ResourceNotFoundError } from "../errors/resource-not-found-error";
import { DeleteSessionUseCase } from "./delete-session-use-case";

let sessionsRepository: InMemorySessionsRepository;
let sut: DeleteSessionUseCase;

describe("Delete Session Use Case", () => {
  beforeEach(() => {
    sessionsRepository = new InMemorySessionsRepository();
    sut = new DeleteSessionUseCase(sessionsRepository);
  });

  it("should be able to delete a session", async () => {
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

  it("should not be able to delete session with wrong token", async () => {
    await expect(() =>
      sut.execute({
        session_token: "non-existing-token",
      })
    ).rejects.toBeInstanceOf(ResourceNotFoundError);
  });
});
