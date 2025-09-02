import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateSucursaTable1756840095945 implements MigrationInterface {
    name = 'CreateSucursaTable1756840095945'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sucursales" ("id" SERIAL NOT NULL, "nombre" character varying(100) NOT NULL, "direccion" character varying(255) NOT NULL, "ciudad" character varying(100) NOT NULL, CONSTRAINT "PK_c2232960c9e458db5b18d35eeba" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "sucursales"`);
    }

}
