import { SessionsRepository } from "@/repositories/sessions-repository";
import { Session } from "@prisma/client";
import { ResourceNotFoundError } from "../errors/resource-not-found-error";

interface GetSessionByTokenUseCaseRequest {
  session_token: string;
}

interface GetSessionByTokenUseCaseResponse {
  session: Session;
}

export class GetSessionByTokenUseCase {
  constructor(private sessionsRepository: SessionsRepository) {}

  async execute({
    session_token,
  }: GetSessionByTokenUseCaseRequest): Promise<GetSessionByTokenUseCaseResponse> {
    const session = await this.sessionsRepository.findSessionByToken(
      session_token
    );

    if (!session) {
      throw new ResourceNotFoundError();
    }

    return {
      session,
    };
  }
}
