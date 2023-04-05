import { InMemoryUsersRepository } from "@/repositories/in-memory/in-memory-users-repository";
import { beforeEach, describe, expect, it } from "vitest";
import { ResourceNotFoundError } from "../errors/resource-not-found-error";
import { UpdateUserUseCase } from "./update-user-use-case";

let usersRepository: InMemoryUsersRepository;
let sut: UpdateUserUseCase;

describe("Create User Use Case", () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository();
    sut = new UpdateUserUseCase(usersRepository);
  });

  it("should be able to update a user", async () => {
    const userCreated = await usersRepository.create({
      name: "Jhon Doe",
      email: "jhondoe@example.com",
      avatar_url: "https://github.com/jhondoe.png",
    });

    const { user } = await sut.execute({
      id: userCreated.id,
      name: "Jhon Doe v2",
    });

    expect(user.name).toEqual("Jhon Doe v2");
  });

  it("should not be able to update user with wrong id", async () => {
    await expect(() =>
      sut.execute({
        id: "non-existing-id",
      })
    ).rejects.toBeInstanceOf(ResourceNotFoundError);
  });
});
