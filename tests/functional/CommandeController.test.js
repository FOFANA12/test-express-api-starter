import { describe, expect, test } from "@jest/globals";
import request from "supertest";
import app from "../../src/app.js";

describe("Test Commande Controller", () => {
  test("Index retourne les commandes", async () => {
    const res = await request(app).get("/api/commandes");
    expect(res.statusCode).toEqual(200);
    expect(res.body.commandes).toHaveLength(1);
    expect(res.body.commandes[0]).toHaveProperty("client");
    expect(res.body.commandes[0]).toHaveProperty("items");
    expect(res.body.commandes[0]).toHaveProperty("total");
  });

  test("Store enregistre une commande", async () => {
    const data = {
      client: "TEST2",
      items: [
        {
          name: "Article",
          price: 320,
          qty: 2,
        },
        {
          name: "Article",
          price: 1,
          qty: 10,
        },
      ],
    };

    const res = await request(app).post("/api/commandes").send(data);
    expect(res.statusCode).toEqual(201);
    expect(res.body.commandes).toHaveLength(2);
    expect(res.body.commandes[1]).toHaveProperty("client");
    expect(res.body.commandes[1]).toHaveProperty("items");
    expect(res.body.commandes[1]).toHaveProperty("total");
  });
});
