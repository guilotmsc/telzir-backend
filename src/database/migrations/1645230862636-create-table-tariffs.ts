import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTableTariffs1645230862636 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`tariffs\` (\`id\` int NOT NULL AUTO_INCREMENT, \`origin\` int NOT NULL, \`destination\` int NOT NULL, \`tariff\` decimal(3, 2) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`tariffs\``);
  }
}
