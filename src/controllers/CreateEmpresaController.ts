import { Request, Response } from "express";
import { CreateEmpresaService } from "../services/CreateEmpresaService";

class CreateEmpresaController {
  async handle(request: Request, response: Response) {
    const { empresaid, bancoid, nome, febraban } = request.body;

    const createEmpresaService = new CreateEmpresaService();

    const x = await createEmpresaService.execute({
      empresaid,
      nome

    });

    return response.json(x);
  }
}

export { CreateEmpresaController };
