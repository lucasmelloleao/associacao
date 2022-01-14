
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMunicipios1642103831723 implements MigrationInterface {


    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "municipios",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                    },
                    {
                        name: "municipioid",
                        type: "int",
                    },
                    {
                        name: "paisid",
                        type: "int",
                    },
                    {
                        name: "ufid",
                        type: "int",
                    },

                    {
                        name: "nome",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],

                indices: [
                    {
                        name: "IMunicipios",
                        columnNames: ["municipioid"],


                    },

                ],


                foreignKeys: [
                    {
                        name: "FKUfsMunicipios",
                        referencedTableName: "ufs",
                        referencedColumnNames: ["paisid", "ufid"],
                        columnNames: ["paisid", "ufid"],

                    }
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("municipios");
    }
}



