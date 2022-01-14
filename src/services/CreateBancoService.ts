import { getCustomRepository } from "typeorm";
import { BancosRepositories } from "../repositories/BancosRepositories";

interface IBancoRequest {
  empresa: number;
  banco: number;
  nome: string;
  febraban: string;
}

class CreateBancoService {
  async execute({ empresa, banco, nome, febraban }: IBancoRequest) {
    const bancosRepository = getCustomRepository(BancosRepositories);

    if (!nome) {
      throw new Error("Nome do banco não informado");
    }

    const bancoAlreadyExists = await bancosRepository.findOne({
      empresa, banco,
    });

    if (bancoAlreadyExists) {
      throw new Error("Banco ja cadastrado");
    }


    const bancos = bancosRepository.create({
      empresa,
      banco,
      nome,
      febraban,
    });

    await bancosRepository.save(bancos);

    return bancos;
  }
}

export { CreateBancoService };
