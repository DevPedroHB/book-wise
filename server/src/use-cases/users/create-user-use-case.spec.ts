import { InMemoryUsersRepository } from "@/repositories/in-memory/in-memory-users-repository";
import { beforeEach, describe, expect, it } from "vitest";
import { UserAlreadyExistsError } from "../errors/user-already-exists";
import { CreateUserUseCase } from "./create-user-use-case";

let usersRepository: InMemoryUsersRepository;
let sut: CreateUserUseCase;

describe("Create User Use Case", () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository();
    sut = new CreateUserUseCase(usersRepository);
  });

  it("should be able to create a new user", async () => {
    const { user } = await sut.execute({
      name: "Jhon Doe",
      email: "jhondoe@example.com",
      avatar_url: "https://github.com/jhondoe.png",
    });

    expect(user.id).toEqual(expect.any(String));
  });

  it("should not be able to create a new user with the same email", async () => {
    const email = "jhondoe@example.com";

    await sut.execute({
      name: "Jhon Doe",
      email,
      avatar_url: "https://github.com/jhondoe.png",
    });

    await expect(() =>
      sut.execute({
        name: "Jhon Doe",
        email,
        avatar_url: "https://github.com/jhondoe.png",
      })
    ).rejects.toBeInstanceOf(UserAlreadyExistsError);
  });
});
