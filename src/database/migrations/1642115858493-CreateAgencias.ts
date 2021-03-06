import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAgencias1642115858493 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "agencias",
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
                        name: "agenciaid",
                        type: "int",

                    },
                    {
                        name: "municipioid",
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


                foreignKeys: [
                    {
                        name: "FKMunicipiosAgencias",
                        referencedTableName: "municipios",
                        referencedColumnNames: ["municipioid"],
                        columnNames: ["municipioid"]

                    },
                    {
                        name: "FKBancoAgencia",
                        referencedTableName: "bancos",
                        referencedColumnNames: ["empresaid", "bancoid"],
                        columnNames: ["empresaid", "bancoid"],

                    }
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("agencias");
    }
}

