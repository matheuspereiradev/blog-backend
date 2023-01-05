import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn, OneToMany, JoinColumn } from 'typeorm';
import { PostEntity } from './post.entity';

@Entity('tb_categories')
export class CategoryEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    icon: string;

    @OneToMany(_type => PostEntity, post => post.category)
    @JoinColumn({ name: 'id' })
    posts: PostEntity[];

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @DeleteDateColumn({name: 'deleted_at'})
    deletedAt: Date;
}
