import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error";
import { makeGetUserByEmailUseCase } from "@/use-cases/factories/make-users-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function getUserByEmail(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const getUserByEmailParamsSchema = z.object({
    email: z.string().email(),
  });

  const { email } = getUserByEmailParamsSchema.parse(request.params);

  try {
    const getUserByEmailUseCase = makeGetUserByEmailUseCase();

    const user = await getUserByEmailUseCase.execute({ email });

    return reply.status(200).send(user);
  } catch (error) {
    if (error instanceof ResourceNotFoundError) {
      return reply.status(400).send({
        message: error.message,
      });
    }

    throw error;
  }
}
