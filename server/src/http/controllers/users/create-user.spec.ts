import { app } from "@/app";
import request from "supertest";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

describe("Create User (e2e)", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able to create a new user", async () => {
    const response = await request(app.server).post("/users").send({
      name: "Jhon Doe",
      email: "jhondoe@example.com",
      avatar_url: "https://github.com/jhondoe.png",
    });

    expect(response.statusCode).toEqual(201);
    expect(response.body.user).toEqual(
      expect.objectContaining({
        id: expect.any(String),
      })
    );
  });
});
