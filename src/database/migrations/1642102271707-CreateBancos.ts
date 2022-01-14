import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateBancos1642102271707 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "bancos",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                    },
                    {
                        name: "empresa",
                        type: "int",
                    },
                    {
                        name: "banco",
                        type: "int",
                    },
                    {
                        name: "nome",
                        type: "varchar",
                    },

                    {
                        name: "febraban",
                        type: "int",
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
                        name: "Ibanco",
                        columnNames: ["empresa", "banco"],

                    }
                ],

            })

        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("bancos");
    }
}
