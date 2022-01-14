import { Request, Response } from "express";
import { CreateBancoService } from "../services/CreateBancoService";

class CreateBancoController {
  async handle(request: Request, response: Response) {
    const { empresa, banco, nome, febraban } = request.body;

    const createBancoService = new CreateBancoService();

    const x = await createBancoService.execute({
      empresa,
      banco,
      nome,
      febraban,
    });

    return response.json(x);
  }
}

export { CreateBancoController };
