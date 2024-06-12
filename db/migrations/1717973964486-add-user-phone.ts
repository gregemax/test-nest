import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserPhone1717973964486 implements MigrationInterface {
    name = 'AddUserPhone1717973964486'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Artists\` (\`id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Song\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`artist\` varchar(255) NOT NULL, \`releaseDate\` date NOT NULL, \`duration\` time NOT NULL, \`lyrics\` text NOT NULL, \`playlistId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Playlist\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`confirmpassword\` text NULL, \`twofa\` text NULL, \`enabletwofa\` tinyint NOT NULL DEFAULT 0, \`apistring\` varchar(255) NOT NULL, \`me\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Song\` ADD CONSTRAINT \`FK_d172260856811bfbe6e80753e33\` FOREIGN KEY (\`playlistId\`) REFERENCES \`Playlist\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Playlist\` ADD CONSTRAINT \`FK_f781e4828ac36036bc49f6c6aee\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Playlist\` DROP FOREIGN KEY \`FK_f781e4828ac36036bc49f6c6aee\``);
        await queryRunner.query(`ALTER TABLE \`Song\` DROP FOREIGN KEY \`FK_d172260856811bfbe6e80753e33\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`Playlist\``);
        await queryRunner.query(`DROP TABLE \`Song\``);
        await queryRunner.query(`DROP TABLE \`Artists\``);
    }

}
