import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn, OneToMany, JoinColumn } from 'typeorm';
import { PostEntity } from './post.entity';

@Entity('tb_users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column()
    bio: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(_type => PostEntity, post => post.author)
    @JoinColumn({ name: 'id' })
    posts: PostEntity[];

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @DeleteDateColumn({name: 'deleted_at'})
    deletedAt: Date;
}
