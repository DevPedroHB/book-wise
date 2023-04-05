import { SessionsRepository } from "@/repositories/sessions-repository";
import { Session } from "@prisma/client";
import { ResourceNotFoundError } from "../errors/resource-not-found-error";

interface UpdateSessionUseCaseRequest {
  session_token: string;
  user_id?: string;
  expires?: Date;
}

interface UpdateSessionUseCaseResponse {
  session: Session;
}

export class UpdateSessionUseCase {
  constructor(private sessionsRepository: SessionsRepository) {}

  async execute({
    session_token,
    user_id,
    expires,
  }: UpdateSessionUseCaseRequest): Promise<UpdateSessionUseCaseResponse> {
    const checkIfSessionExists =
      await this.sessionsRepository.findSessionByToken(session_token);

    if (!checkIfSessionExists) {
      throw new ResourceNotFoundError();
    }

    const session = await this.sessionsRepository.update(
      checkIfSessionExists.session_token,
      {
        user_id,
        expires,
      }
    );

    return {
      session,
    };
  }
}
