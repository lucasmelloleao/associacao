import { Column, MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class CreateUfs1642103817239 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "ufs",
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
                        name: "IUfs",
                        columnNames: ["paisid", "ufid"],


                    },

                ],

                foreignKeys: [
                    {
                        name: "FKPaisesUfs",
                        referencedTableName: "paises",
                        referencedColumnNames: ["paisid"],
                        columnNames: ["paisid"],

                    }
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("ufs");
    }
}
