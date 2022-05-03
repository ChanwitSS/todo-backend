import {MigrationInterface, QueryRunner} from "typeorm";

export class editDetail1651614065644 implements MigrationInterface {
    name = 'editDetail1651614065644'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tasks\` DROP COLUMN \`detail\``);
        await queryRunner.query(`ALTER TABLE \`tasks\` ADD \`detail\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tasks\` DROP COLUMN \`detail\``);
        await queryRunner.query(`ALTER TABLE \`tasks\` ADD \`detail\` int NOT NULL`);
    }

}
