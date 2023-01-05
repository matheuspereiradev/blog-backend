import { Injectable } from '@nestjs/common';
import { Post } from '../classes/post.class';
import { CategoryRepository } from '../repositories/category.repository';
import { PostRepository } from '../repositories/post.repository';
import { UserRepository } from '../repositories/user.repository';
import { CategoryNotFound } from './errors/CategoryNotFound.error';
import { PostNotFound } from './errors/PostNotFound.error';
import { UserNotFound } from './errors/UserNotFound.error';
import { YouArentAllowedToEditThisPost } from './errors/YouArentAllowedToEditThisPost.error';

export interface IRequest {
    id: number,
    title: string,
    description: string,
    content: string,
    thumbnail: string,
    idCategory: number,
    idUser: number,
}

export interface IResponse {
    post: Post
}

@Injectable()
export class UpdatePostService {
    constructor(
        private userRepository: UserRepository,
        private categoryRepository: CategoryRepository,
        private postRepository: PostRepository,

    ) { }

    async execute({ content, description, idCategory, thumbnail, title, id, idUser }: IRequest): Promise<IResponse> {

        const post = await this.postRepository.findByID(id)
        if (!post)
            throw new PostNotFound()

        const author = await this.userRepository.findByID(post.author.id)
        if (!author)
            throw new UserNotFound()
        if (author.id !== idUser)
            throw new YouArentAllowedToEditThisPost()

        const category = await this.categoryRepository.findByID(idCategory)
        if (!category)
            throw new CategoryNotFound()

        Object.assign(
            post,
            {
                content,
                description,
                thumbnail,
                category,
                title
            }
        )
        
        await this.postRepository.save(post)

        return {
            post
        }
    }
}
