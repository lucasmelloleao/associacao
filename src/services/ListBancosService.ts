import { getCustomRepository, getRepository, Like } from "typeorm";
import { BancosRepositories } from "../repositories/BancosRepositories";
import { classToPlain } from "class-transformer";
import { Banco } from "../entities/Banco";


type BancoUpdateRequest = {
  id: string;

}

export class ListBancobyIdService {
  async execute( {id} : BancoUpdateRequest){
      const repo = getRepository(Banco);

      const banco = await repo.findOne({
          where : { id: id ,
                         
          } ,
       relations: ["empresa"],
      });
         
      if (!banco) {
          return new Error("banco não existe");
      }  
      
     
    //  await repo.save (banco);

      return banco;

    
  }

}


export class ListBancobyNameService {
  async execute( {id} : BancoUpdateRequest){
      const repo = getRepository(Banco);

      const banco = await repo.findOne({
              nome: Like(`%${id}%`)},

            {  relations: ["empresa"]
       
      });
         
      if (!banco) {
          return new Error("banco não existe");
      }  
              return banco;

    
  }
}




class ListBancosService {
  async execute() {
    const tagsRepositories = getCustomRepository(BancosRepositories);
    
    const bancos =  await tagsRepositories.find({
      relations:['empresa']
      
    });

   

    return classToPlain(bancos);
  }
}

export { ListBancosService };
