import { prisma } from "@/lib/prisma";

export async function createUserTest() {
  const user = await prisma.user.create({
    data: {
      name: "Jhon Doe",
      email: "jhondoe@example.com",
      avatar_url: "https://github.com/jhondoe.png",
    },
  });

  return user;
}
