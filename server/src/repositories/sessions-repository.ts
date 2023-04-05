import { Prisma, Session } from "@prisma/client";

export interface SessionsRepository {
  create(data: Prisma.SessionUncheckedCreateInput): Promise<Session>;
  findSessionByToken(session_token: string): Promise<Session | null>;
  update(
    session_token: string,
    data: Prisma.SessionUncheckedUpdateInput
  ): Promise<Session>;
  delete(session_token: string): Promise<Session>;
}
