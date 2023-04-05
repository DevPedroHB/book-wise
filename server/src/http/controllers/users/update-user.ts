import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error";
import { makeUpdateUserUseCase } from "@/use-cases/factories/make-users-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function updateUser(request: FastifyRequest, reply: FastifyReply) {
  const updateUserParamsSchema = z.object({
    id: z.string().uuid(),
  });
  const updateUserBodySchema = z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    avatar_url: z.string().optional(),
  });

  const { id } = updateUserParamsSchema.parse(request.params);
  const { name, email, avatar_url } = updateUserBodySchema.parse(request.body);

  try {
    const updateUserUseCase = makeUpdateUserUseCase();

    const user = await updateUserUseCase.execute({
      id,
      name,
      email,
      avatar_url,
    });

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
