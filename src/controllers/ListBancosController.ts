import { Request, Response } from "express";
//import { ListBancobyIdService, ListBancobyNameService } from "../services/ListBancoByIDService";
import { ListBancobyIdService, ListBancobyNameService, ListBancosService } from "@services/ListBancosService";

class ListBancosController {
  async handle(request: Request, response: Response) {
    const listBancosService = new ListBancosService();

    const bancos = await listBancosService.execute();

    return response.json(bancos);
  }
}


export class FindBancoController {
  async handle (request: Request, response:Response) {
      const {id} = request.params;
    //  const { empresaid, bancoid, nome,febraban} = request.body
      
      const service = new ListBancobyIdService

      const result = await service.execute ({id});

      if (result instanceof Error) {
          return response.status(400).json(result.message)
      }
      return response.json(result);
  }
}

export class FindBancobyNameController {
  async handle (request: Request, response:Response) {
      const {id} = request.params;
    //  const { empresaid, bancoid, nome,febraban} = request.body
      
      const service = new ListBancobyNameService

      const result = await service.execute ({id});

      if (result instanceof Error) {
          return response.status(400).json(result.message)
      }
      return response.json(result);
  }
}


export { ListBancosController };
