import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEmpresas1622124838954 implements MigrationInterface {


    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "empresas",
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
                        name: "IEmpresa",
                        columnNames: ["empresaid"],
                    }
                ],

            })

        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("empresa");
    }
}
