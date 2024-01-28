import { MigrationInterface, QueryRunner } from "typeorm";

export class User1706368611956 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
                CREATE TABLE IF NOT EXISTS users
                (
                    id uuid NOT NULL DEFAULT uuid_generate_v4(),
                    created_at timestamp(0) with time zone NOT NULL DEFAULT now(), 
                    updated_at timestamp(0) with time zone NOT NULL DEFAULT now(), 
                    deleted_at timestamp(0) with time zone,
                    username CHARACTER VARYING(100) NOT NULL UNIQUE,
                    first_name CHARACTER VARYING(100) NOT NULL,
                    last_name CHARACTER VARYING(100),
                    email CHARACTER VARYING(100) NOT NULL UNIQUE,
                    password CHARACTER VARYING NOT NULL,
                    CONSTRAINT users_id_pkey PRIMARY KEY (id)
                )
            `
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
                DROP TABLE IF EXISTS users
            `
        )
    }

}
