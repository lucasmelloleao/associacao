import { getCustomRepository } from "typeorm";
import { EmpresasRepositories } from "../repositories/EmpresasRepositories";

interface IEmpresaRequest {
  empresaid: number;
  nome: string;

}

class CreateEmpresaService {
  async execute({ empresaid, nome }: IEmpresaRequest) {
    const empresasRepository = getCustomRepository(EmpresasRepositories);

    if (!nome) {
      throw new Error("Nome da Empresa não informado");
    }

    const empresaAlreadyExists = await empresasRepository.findOne({
      empresaid
    });

    if (empresaAlreadyExists) {
      throw new Error("Empresa ja cadastrada");
    }


    const empresas = empresasRepository.create({
      empresaid,
      nome
    });

    await empresasRepository.save(empresas);

    return empresas;
  }
}

export { CreateEmpresaService };
