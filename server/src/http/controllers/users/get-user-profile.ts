import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error";
import { makeGetUserProfileUseCase } from "@/use-cases/factories/make-users-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function getUserProfile(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const getUserProfileParamsSchema = z.object({
    id: z.string().uuid(),
  });

  const { id } = getUserProfileParamsSchema.parse(request.params);

  try {
    const getUserProfileUseCase = makeGetUserProfileUseCase();

    const user = await getUserProfileUseCase.execute({ id });

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
