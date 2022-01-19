import { Request, Response } from "express";
import { CreateBancoService } from "@services/CreateBancoService";

class CreateBancoController {
  async handle(request: Request, response: Response) {
    const { empresaid, bancoid, nome, febraban } = request.body;

    const createBancoService = new CreateBancoService();

    const x = await createBancoService.execute({
      empresaid,
      bancoid,
      nome,
      febraban,
    });

    return response.json(x);
  }
}

export { CreateBancoController };
