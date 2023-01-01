import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createTableUsers1672610622505 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: 'tb_users',
			columns: [
				{
					name: 'id',
					type: 'int',
					isPrimary: true,
					isGenerated: true,
					generationStrategy: 'increment'
				},
				{
					name: 'name',
					type: 'varchar',
					length: '50',
				},
				{
					name: 'surname',
					type: 'varchar',
					length: '50',
				},
				{
					name: 'bio',
					type: 'text',
				},
				{
					name: 'password',
					type: 'varchar',
					length: '150',
				},
				{
					name: 'email',
					type: 'varchar',
					length: '80',
				},
                {
					name: 'created_at',
					type: 'timestamp',
					default: 'CURRENT_TIMESTAMP'
				},
				{
					name: 'deleted_at',
					type: 'timestamp',
					isNullable: true
				}
				
			]
		}));
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('tb_users');
	}

}
