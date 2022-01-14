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
                        name: "empresa",
                        type: "int",
                    },
                    {
                        name: "banco",
                        type: "int",
                    },
                    {
                        name: "agencia",
                        type: "int",

                    },
                    {
                        name: "municipio",
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
                        referencedColumnNames: ["municipio"],
                        columnNames: ["municipio"]

                    },
                    {
                        name: "FKBancoAgencia",
                        referencedTableName: "bancos",
                        referencedColumnNames: ["empresa", "banco"],
                        columnNames: ["empresa", "banco"],

                    }
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("agencias");
    }
}

