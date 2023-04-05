import { UsersRepository } from "@/repositories/users-repository";
import { User } from "@prisma/client";
import { ResourceNotFoundError } from "../errors/resource-not-found-error";

interface UpdateUserUseCaseRequest {
  id: string;
  name?: string;
  email?: string;
  avatar_url?: string;
}

interface UpdateUserUseCaseResponse {
  user: User;
}

export class UpdateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    id,
    name,
    email,
    avatar_url,
  }: UpdateUserUseCaseRequest): Promise<UpdateUserUseCaseResponse> {
    const checkIfUserExists = await this.usersRepository.findById(id);

    if (!checkIfUserExists) {
      throw new ResourceNotFoundError();
    }

    const user = await this.usersRepository.update(checkIfUserExists.id, {
      name,
      email,
      avatar_url,
    });

    return {
      user,
    };
  }
}
