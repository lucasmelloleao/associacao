import { Request, response, Response } from "express";
import { ListBancobyIdService } from "../services/ListBancoByIDService";

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