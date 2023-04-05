import { SessionsRepository } from "@/repositories/sessions-repository";
import { Session } from "@prisma/client";
import { ResourceNotFoundError } from "../errors/resource-not-found-error";

interface DeleteSessionUseCaseRequest {
  session_token: string;
}

interface DeleteSessionUseCaseResponse {
  session: Session;
}

export class DeleteSessionUseCase {
  constructor(private sessionsRepository: SessionsRepository) {}

  async execute({
    session_token,
  }: DeleteSessionUseCaseRequest): Promise<DeleteSessionUseCaseResponse> {
    const checkIfSessionExists =
      await this.sessionsRepository.findSessionByToken(session_token);

    if (!checkIfSessionExists) {
      throw new ResourceNotFoundError();
    }

    const session = await this.sessionsRepository.delete(
      checkIfSessionExists.session_token
    );

    return {
      session,
    };
  }
}
