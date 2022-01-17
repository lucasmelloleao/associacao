import { getCustomRepository } from "typeorm";
import { EmpresasRepositories } from "../repositories/EmpresasRepositories";
import { classToPlain } from "class-transformer";

class ListEmpresasService {
  async execute() {
    const empresasRepositories = getCustomRepository(EmpresasRepositories);

    const empresas =  await  empresasRepositories.find({
      
      
    });

    return classToPlain(empresas);
  }
}

export { ListEmpresasService };
