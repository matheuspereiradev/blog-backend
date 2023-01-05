import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createtablePost1672858470655 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: 'tb_posts',
			columns: [
				{
					name: 'id',
					type: 'int',
					isPrimary: true,
					isGenerated: true,
					generationStrategy: 'increment'
				},
				{
					name: 'title',
					type: 'varchar',
					length: '200',
				},
				{
					name: 'thumbnail',
					type: 'varchar',
					length: '200',
				},
				{
					name: 'description',
					type: 'text',
				},
				{
					name: 'content',
					type: 'text',
				},
				{
					name: 'id_author',
					type: 'int'
				},
				{
					name: 'id_category',
					type: 'int',
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
		await queryRunner.dropTable('tb_posts');
	}

}
