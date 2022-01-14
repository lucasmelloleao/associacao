import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class TipoDocumentos1642118760677 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tipoDocumentos",
                columns: [
                    {

                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                    },
                    {
                        name: "tipodocto",
                        type: "int",
                    },
                    {
                        name: "nome",
                        type: "varchar",
                    },
                    {
                        name: "pais",
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
                        name: "FKPaisesTipoDocumentos",
                        referencedTableName: "paises",
                        referencedColumnNames: ["pais"],
                        columnNames: ["pais"]

                    },

                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tipoDocumentos");
    }
}

