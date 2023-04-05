import { FastifyInstance } from "fastify";
import { createUser } from "./create-user";
import { getUserByEmail } from "./get-user-by-email";
import { getUserProfile } from "./get-user-profile";
import { updateUser } from "./update-user";

export async function usersRoutes(app: FastifyInstance) {
  app.post("/", createUser);
  app.get("/:id", getUserProfile);
  app.get("/email/:email", getUserByEmail);
  app.put("/:id", updateUser);
}
