import { getRepository } from "typeorm"
import { Banco } from "../entities/Banco"


type BancoUpdateRequest = {
    id: string;
  
}

export class ListBancobyIdService {
    async execute( {id} : BancoUpdateRequest){
        const repo = getRepository(Banco);

        const banco = await repo.findOne(id);
        if (!banco) {
            return new Error("banco não existe");
        }  
        
       
        await repo.save (banco);

        return banco;

      
    }



}