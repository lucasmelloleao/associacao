import { Request, response, Response } from "express";
import { UpdateBancoService } from "../services/UpdateBancoService";

export class UpdateBancoController {
    async handle (request: Request, response:Response) {
        const {id} = request.params;
        const { empresaid, bancoid, nome,febraban} = request.body
        
        const service = new UpdateBancoService

        const result = await service.execute ({id, empresaid,bancoid, nome,febraban});

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }
        return response.json(result);
    }
}