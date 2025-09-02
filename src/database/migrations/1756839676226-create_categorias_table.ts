import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCategoriasTable1756839676226 implements MigrationInterface {
    name = 'CreateCategoriasTable1756839676226'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categorias" ("id" SERIAL NOT NULL, "nombre" character varying(100) NOT NULL, "descripcion" text, CONSTRAINT "PK_3886a26251605c571c6b4f861fe" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "categorias"`);
    }

}
