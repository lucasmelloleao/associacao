import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePaises1642103808330 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "paises",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                    },

                    {
                        name: "paisid",
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
                        name: "IPaises",
                        columnNames: ["paisid"],

                    }
                ],

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("paises");
    }
}
