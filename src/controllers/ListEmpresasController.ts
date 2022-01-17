import { Request, Response } from "express";
import { ListEmpresasService } from "../services/ListEmpresasService";

class ListEmpresasController {
  async handle(request: Request, response: Response) {
    const listEmpresasService = new ListEmpresasService();

    const bancos = await listEmpresasService.execute();

    return response.json(bancos);
  }
}

export { ListEmpresasController };
