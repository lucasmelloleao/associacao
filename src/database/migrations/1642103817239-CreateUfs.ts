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
                        name: "pais",
                        type: "int",
                    },
                    {
                        name: "uf",
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
                        columnNames: ["pais", "uf"],


                    },

                ],

                foreignKeys: [
                    {
                        name: "FKPaisesUfs",
                        referencedTableName: "paises",
                        referencedColumnNames: ["pais"],
                        columnNames: ["pais"],

                    }
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("ufs");
    }
}
