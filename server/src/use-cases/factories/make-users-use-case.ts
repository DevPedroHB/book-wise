import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { CreateUserUseCase } from "../users/create-user-use-case";
import { GetUserByEmailUseCase } from "../users/get-user-by-email-use-case";
import { GetUserProfileUseCase } from "../users/get-user-profile-use-case";
import { UpdateUserUseCase } from "../users/update-user-use-case";

const usersRepository = new PrismaUsersRepository();
// const usersRepository = new InMemoryUsersRepository();

export function makeCreateUserUseCase() {
  const createUserUseCase = new CreateUserUseCase(usersRepository);

  return createUserUseCase;
}

export function makeGetUserByEmailUseCase() {
  const getUserByEmailUseCase = new GetUserByEmailUseCase(usersRepository);

  return getUserByEmailUseCase;
}

export function makeGetUserProfileUseCase() {
  const getUserProfileUseCase = new GetUserProfileUseCase(usersRepository);

  return getUserProfileUseCase;
}

export function makeUpdateUserUseCase() {
  const updateUserUseCase = new UpdateUserUseCase(usersRepository);

  return updateUserUseCase;
}
