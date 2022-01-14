import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";
import { Exclude } from "class-transformer";
import { v4 as uuid } from "uuid";

@Entity("bancos")
class Banco {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    empresa: number;

    @Column()
    banco: number;

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
