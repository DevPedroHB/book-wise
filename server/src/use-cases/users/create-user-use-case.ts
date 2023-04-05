import { UsersRepository } from "@/repositories/users-repository";
import { User } from "@prisma/client";
import { UserAlreadyExistsError } from "../errors/user-already-exists";

interface CreateUserUseCaseRequest {
  name: string;
  email: string;
  avatar_url?: string;
}

interface CreateUserUseCaseResponse {
  user: User;
}

export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    name,
    email,
    avatar_url,
  }: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
    const userWithSameEmail = await this.usersRepository.findByEmail(email);

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError();
    }

    const user = await this.usersRepository.create({
      name,
      email,
      avatar_url,
    });

    return {
      user,
    };
  }
}
