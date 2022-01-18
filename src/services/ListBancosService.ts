import { getCustomRepository } from "typeorm";
import { BancosRepositories } from "../repositories/BancosRepositories";
import { classToPlain } from "class-transformer";

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
