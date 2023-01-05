
import { Inject, Injectable } from '@nestjs/common';
import { Post } from 'src/application/classes/post.class';
import { PostRepository } from 'src/application/repositories/post.repository';
import { Repository } from 'typeorm';
import { PostEntity } from '../entities/post.entity';
import { TypeormPostMapper } from '../mappers/post.mappers';

@Injectable()
export class TypeOrmPostRepository implements PostRepository {
    constructor(
        @Inject('POST_REPOSITORY')
        private postRepository: Repository<PostEntity>,
    ) { }

    async create(post: Post): Promise<void> {
        const row = TypeormPostMapper.toTypeOrm(post)
        await this.postRepository.save(row)
    }

    async save(post: Post): Promise<void> {
        const row = TypeormPostMapper.toTypeOrm(post)
        await this.postRepository.save(row)
    }

    async findByID(id: number): Promise<Post> {
        const post = await this.postRepository.findOne({
            where: {
                id
            },
            relations: ['author', 'category']
        })
        if(post)
            return TypeormPostMapper.toDomain(post)
        return null
    }

    async find(): Promise<Post[]> {
        const categories = await this.postRepository.find({
            relations: ['author', 'category']
        })
        return categories.map(post => TypeormPostMapper.toDomain(post))
    }

}