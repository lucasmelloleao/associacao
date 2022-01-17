import { EntityRepository, Repository } from "typeorm";
import { Empresa } from "../entities/Empresa";

@EntityRepository(Empresa)
class EmpresasRepositories extends Repository<Empresa> {
  static find(arg0: {}) {
    throw new Error("Method not implemented.");
  }
}

export { EmpresasRepositories };
