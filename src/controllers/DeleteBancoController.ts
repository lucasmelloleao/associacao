


import { Request, Response } from "express";
import { DeleteBancoService } from "@services/DeleteBancoService";

export class DeleteBancoController {
async handle (request:Request, response:Response) {
    const { id } = request.params
    const service = new DeleteBancoService();
    const result = await service.execute(id);

    if (result instanceof Error) {
       return response.status(400).json(result.message);
    }

    return response.status(200).end();
}

}