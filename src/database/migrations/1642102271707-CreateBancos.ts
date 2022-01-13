import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateBancos1642102271707 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "bancos",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {
                        name: "empresa",
                        type: "integer",
                    },
                    {
                        name: "codigo",
                        type: "integer",
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
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("bancos");
    }
}
