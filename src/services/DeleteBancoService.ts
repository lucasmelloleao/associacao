import { getRepository } from "typeorm";
import { Banco } from "../entities/Banco";



export class DeleteBancoService {
async execute (id: string) {
    const repo = getRepository(Banco);
    if (!await repo.findOne(id)){
        return new Error("Banco não existe!");
    }

    await repo.delete(id);
    }
}









