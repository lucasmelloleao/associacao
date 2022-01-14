import { getRepository } from "typeorm"
import { Banco } from "../entities/Banco"


type BancoUpdateRequest = {
    id: string;
    empresaid : number;
    bancoid : number;
    nome :string;
    febraban : string;
}

export class UpdateBancoService {
    async execute( {id, empresaid, bancoid, nome,febraban} : BancoUpdateRequest){
        const repo = getRepository(Banco);

        const banco = await repo.findOne(id);
        if (!banco) {
            return new Error("banco não existe");
        }  
        
        banco.empresaid = empresaid ? empresaid : banco.empresaid;
        banco.bancoid   = bancoid ? bancoid : banco.bancoid;
        banco.nome      = nome ? nome : banco.nome;
        banco.febraban  = febraban ? febraban : banco.febraban;

        await repo.save (banco);

        return banco;

      
    }



}