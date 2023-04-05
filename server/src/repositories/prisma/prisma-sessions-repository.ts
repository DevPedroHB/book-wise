import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { SessionsRepository } from "../sessions-repository";

export class PrismaSessionsRepository implements SessionsRepository {
  async create(data: Prisma.SessionUncheckedCreateInput) {
    const session = await prisma.session.create({
      data,
    });

    return session;
  }

  async findSessionByToken(session_token: string) {
    const session = await prisma.session.findUnique({
      where: {
        session_token,
      },
      include: {
        user: true,
      },
    });

    return session;
  }

  async update(
    session_token: string,
    data: Prisma.SessionUncheckedUpdateInput
  ) {
    const session = await prisma.session.update({
      where: {
        session_token,
      },
      data,
    });

    return session;
  }

  async delete(session_token: string) {
    const session = await prisma.session.delete({
      where: {
        session_token,
      },
    });

    return session;
  }
}
