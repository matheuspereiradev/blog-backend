import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreatetableCategories1672508600449 implements MigrationInterface {


	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: 'tb_categories',
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
					length: '120',
				},
				{
					name: 'description',
					type: 'text',
				},
				{
					name: 'icon',
					type: 'varchar',
					length: '150',
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
		await queryRunner.dropTable('tb_categories');
	}

}
