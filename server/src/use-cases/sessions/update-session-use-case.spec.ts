import { InMemorySessionsRepository } from "@/repositories/in-memory/in-memory-sessions-repository";
import { beforeEach, describe, expect, it } from "vitest";
import { ResourceNotFoundError } from "../errors/resource-not-found-error";
import { UpdateSessionUseCase } from "./update-session-use-case";

let sessionsRepository: InMemorySessionsRepository;
let sut: UpdateSessionUseCase;

describe("Update Session Use Case", () => {
  beforeEach(() => {
    sessionsRepository = new InMemorySessionsRepository();
    sut = new UpdateSessionUseCase(sessionsRepository);
  });

  it("should be able to update a session", async () => {
    const sessionCreated = await sessionsRepository.create({
      session_token: "session_token",
      user_id: "user_id",
      expires: new Date(),
    });

    const { session } = await sut.execute({
      session_token: sessionCreated.session_token,
      user_id: "user_id v2",
    });

    expect(session.user_id).toEqual("user_id v2");
  });

  it("should not be able to update session with wrong token", async () => {
    await expect(() =>
      sut.execute({
        session_token: "non-existing-token",
      })
    ).rejects.toBeInstanceOf(ResourceNotFoundError);
  });
});
