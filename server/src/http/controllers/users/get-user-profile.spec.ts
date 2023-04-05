import { app } from "@/app";
import { createUserTest } from "@/utils/test/create-user-test";
import request from "supertest";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

describe("Get User Profile (e2e)", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able to get user profile", async () => {
    const user = await createUserTest();

    const response = await request(app.server).get(`/users/${user.id}`).send();

    expect(response.statusCode).toEqual(200);
    expect(response.body.user).toEqual(
      expect.objectContaining({
        id: user.id,
      })
    );
  });
});
