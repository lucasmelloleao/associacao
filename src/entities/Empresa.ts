import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn
} from "typeorm";
import { Exclude } from "class-transformer";
import { v4 as uuid } from "uuid";
import { Banco } from "@entities/Banco"


@Entity("empresas")
class Empresa {
    @PrimaryGeneratedColumn()
    readonly id: string;
   
   
    @Column()
    empresaid: number;
  
    @OneToMany(type => Banco, banco => banco.empresaid)
    banco: Banco[];
    
   

    @Column()
    nome: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Empresa };
