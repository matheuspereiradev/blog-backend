import { User } from 'src/application/classes/user.class';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { UserEntity } from './user.entity';

@Entity('tb_posts')
export class PostEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    thumbnail: string;

    @Column()
    description: string;
    
    @Column()
    content: string;

    @Column()
    id_author: number;

    @Column()
    id_category: number;

    @ManyToOne(_type => UserEntity, user => user.posts)
	@JoinColumn({ name: 'id_author' })
	author: UserEntity;

    @ManyToOne(_type => CategoryEntity, category => category.posts)
	@JoinColumn({ name: 'id_category' })
	category: CategoryEntity;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @DeleteDateColumn({name: 'deleted_at'})
    deletedAt: Date;
}
