import { Prisma, User } from "@prisma/client";
import { randomUUID } from "node:crypto";
import { UsersRepository } from "../users-repository";

export class InMemoryUsersRepository implements UsersRepository {
  public items: User[] = [];

  async create(data: Prisma.UserCreateInput) {
    const user = {
      id: randomUUID(),
      name: data.name,
      email: data.email,
      avatar_url: data.avatar_url ?? "",
      created_at: new Date(),
    };

    this.items.push(user);

    return user;
  }

  async findByEmail(email: string) {
    const user = this.items.find((item) => item.email === email);

    if (!user) {
      return null;
    }

    return user;
  }

  async findById(id: string) {
    const user = this.items.find((item) => item.id === id);

    if (!user) {
      return null;
    }

    return user;
  }

  async update(id: string, data: Prisma.UserUpdateInput) {
    const userIndex = this.items.findIndex((item) => item.id === id);

    if (userIndex >= 0) {
      this.items[userIndex] = {
        ...this.items[userIndex],
        ...Object.fromEntries(
          Object.entries(data).filter((value) => value[1] !== undefined)
        ),
      };
    }

    const user = this.items[userIndex];

    return user;
  }
}
