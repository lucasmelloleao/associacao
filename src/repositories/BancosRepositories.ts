import { EntityRepository, Repository } from "typeorm";
import { Banco } from "../entities/Banco";

@EntityRepository(Banco)
class BancosRepositories extends Repository<Banco> { }

export { BancosRepositories };
