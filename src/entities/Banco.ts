import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToOne,
    Index,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Exclude } from "class-transformer";
import { v4 as uuid } from "uuid";
import { Empresa } from "@entities/Empresa";


@Entity("bancos")
class Banco {


    @PrimaryGeneratedColumn()
    readonly id: string;

   
 
    @Column()
    empresaid: number;
 

    
    @ManyToOne(type=>Empresa)
   @JoinColumn({ name: 'empresaid', referencedColumnName:'empresaid' })
    empresa: Empresa;



    @Column()
    bancoid: number;

    @Column()
    nome: string;

    @Column()
    febraban: string;


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

export { Banco };
