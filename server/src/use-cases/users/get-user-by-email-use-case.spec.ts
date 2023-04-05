import { InMemoryUsersRepository } from "@/repositories/in-memory/in-memory-users-repository";
import { beforeEach, describe, expect, it } from "vitest";
import { ResourceNotFoundError } from "../errors/resource-not-found-error";
import { GetUserByEmailUseCase } from "./get-user-by-email-use-case";

let usersRepository: InMemoryUsersRepository;
let sut: GetUserByEmailUseCase;

describe("Get User By Email Use Case", () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository();
    sut = new GetUserByEmailUseCase(usersRepository);
  });

  it("should be able to get user by email", async () => {
    const userCreated = await usersRepository.create({
      name: "Jhon Doe",
      email: "jhondoe@example.com",
      avatar_url: "https://github.com/jhondoe.png",
    });

    const { user } = await sut.execute({
      email: userCreated.email,
    });

    expect(user.name).toEqual("Jhon Doe");
  });

  it("should not be able to get user with wrong email", async () => {
    await expect(() =>
      sut.execute({
        email: "non-existing-email@example.com",
      })
    ).rejects.toBeInstanceOf(ResourceNotFoundError);
  });
});
