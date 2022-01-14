import { Request, Response } from "express";
import { ListBancosService } from "../services/ListBancosService";

class ListBancosController {
  async handle(request: Request, response: Response) {
    const listBancosService = new ListBancosService();

    const bancos = await listBancosService.execute();

    return response.json(bancos);
  }
}

export { ListBancosController };
