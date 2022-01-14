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
                        name: "empresaid",
                        type: "int",
                    },
                    {
                        name: "bancoid",
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
                        columnNames: ["empresaid", "bancoid"],

                    },
                    {
                        name: "Ibanco1",
                        columnNames: ["empresaid"],

                    }

                ],
                foreignKeys: [
                    {
                        name: "FKEmpresaBanco",
                        referencedTableName: "empresas",
                        referencedColumnNames: ["empresaid"],
                        columnNames: ["empresaid"],

                    }
                ],

            })

        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("bancos");
    }
}
