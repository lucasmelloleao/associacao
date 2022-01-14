import { getCustomRepository } from "typeorm";
import { BancosRepositories } from "../repositories/BancosRepositories";

interface IBancoRequest {
  empresaid: number;
  bancoid: number;
  nome: string;
  febraban: string;
}

class CreateBancoService {
  async execute({ empresaid, bancoid, nome, febraban }: IBancoRequest) {
    const bancosRepository = getCustomRepository(BancosRepositories);

    if (!nome) {
      throw new Error("Nome do banco não informado");
    }

    const bancoAlreadyExists = await bancosRepository.findOne({
      empresaid , bancoid,
    });

    if (bancoAlreadyExists) {
      throw new Error("Banco ja cadastrado");
    }


    const bancos = bancosRepository.create({
      empresaid,
      bancoid,
      nome,
      febraban,
    });

    await bancosRepository.save(bancos);

    return bancos;
  }
}

export { CreateBancoService };
