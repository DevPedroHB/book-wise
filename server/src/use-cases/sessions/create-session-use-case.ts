import { SessionsRepository } from "@/repositories/sessions-repository";
import { Session } from "@prisma/client";
import { SessionAlreadyExistsError } from "../errors/session-already-exists";

interface CreateSessionUseCaseRequest {
  session_token: string;
  user_id: string;
  expires: Date;
}

interface CreateSessionUseCaseResponse {
  session: Session;
}

export class CreateSessionUseCase {
  constructor(private sessionsRepository: SessionsRepository) {}

  async execute({
    session_token,
    user_id,
    expires,
  }: CreateSessionUseCaseRequest): Promise<CreateSessionUseCaseResponse> {
    const sessionWithSameToken =
      await this.sessionsRepository.findSessionByToken(session_token);

    if (sessionWithSameToken) {
      throw new SessionAlreadyExistsError();
    }

    const session = await this.sessionsRepository.create({
      session_token,
      user_id,
      expires,
    });

    return {
      session,
    };
  }
}
