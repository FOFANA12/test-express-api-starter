import TarifService from "./Services/TarifService.js";

export default class CommandeRepository {
  static commandes = [
    {
      client: "FOFANA",
      items: [
        {
          name: "Article",
          price: 10,
          qty: 10,
        },
        {
          name: "Article",
          price: 10,
          qty: 10,
        },
      ],
      total: 200
    },
  ];

  index = () => {
    return { commandes: CommandeRepository.commandes };
  };

  sotre = (data) => {
    let total = 0;
    data.items.forEach(item => {
      total += TarifService.calculTotalLigne(item.price, item.qty);
    })

    CommandeRepository.commandes.push({
      ...data,
      total
    });
    
    return { commandes: CommandeRepository.commandes };
  };
}
