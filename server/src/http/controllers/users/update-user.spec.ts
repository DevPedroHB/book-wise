import { app } from "@/app";
import { createUserTest } from "@/utils/test/create-user-test";
import request from "supertest";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

describe("Update User (e2e)", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able to update a user", async () => {
    const user = await createUserTest();

    const response = await request(app.server).put(`/users/${user.id}`).send({
      name: "Jhon Doe v2",
      email: "jhondoev2@example.com",
      avatar_url: "https://github.com/jhondoev2.png",
    });

    expect(response.statusCode).toEqual(200);
    expect(response.body.user).toEqual(
      expect.objectContaining({
        name: "Jhon Doe v2",
      })
    );
  });
});
