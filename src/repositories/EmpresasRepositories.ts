import { EntityRepository, Repository } from "typeorm";
import { Empresa } from "../entities/Empresa";

@EntityRepository(Empresa)
class EmpresasRepositories extends Repository<Empresa> { }

export { EmpresasRepositories };
