import { describe, expect, test } from "@jest/globals";
import CommandeRepository from "../../src/CommandeRepository.js";

const repository = new CommandeRepository();

describe("Test Commande Repository", () => {
  test("Index retourne les commande", () => {
    const result = repository.index();

    expect(result.commandes).toHaveLength(1);
    expect(result.commandes[0]).toHaveProperty("client");
    expect(result.commandes[0]).toHaveProperty("items");
    expect(result.commandes[0]).toHaveProperty("total");
  });

  test("Store enregistre commande", () => {
    data = {
      client: "Client 2",
      items: [
        {
          name: "Article",
          price: 10,
          qty: 10,
        },
      ],
      total: 100,
    };

    const res = repository.index();
    const size = res.commandes.length;

    const createdOrder = repository.sotre(data);

    expect(createdOrder.commandes).toHaveLength(size+1);
    expect(createdOrder.commandes[createdOrder.commandes.length-1]).toHaveProperty("client");
  });
});
