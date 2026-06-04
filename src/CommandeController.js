import { StatusCodes } from "http-status-codes";
import CommandeRepository from "./CommandeRepository.js";

export default class CommandeController {
  repository = new CommandeRepository();

  index = (req, resp, next) => {
    const result = this.repository.index();

    return resp.status(StatusCodes.OK).json({ commandes: result.commandes });
  };

  store = (req, resp, next) => {
    const { client, items } = req.body;

    const result = this.repository.store({ client, items });

    return resp
      .status(StatusCodes.CREATED)
      .json({ commandes: result.commandes });
  };
}
