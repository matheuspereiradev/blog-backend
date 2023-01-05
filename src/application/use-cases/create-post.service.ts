import { Injectable } from '@nestjs/common';
import { Post } from '../classes/post.class';
import { CategoryRepository } from '../repositories/category.repository';
import { PostRepository } from '../repositories/post.repository';
import { UserRepository } from '../repositories/user.repository';
import { CategoryNotFound } from './errors/CategoryNotFound.error';
import { UserNotFound } from './errors/UserNotFound.error';

export interface ICreatePostRequest {
    title: string,
    description: string,
    content: string,
    thumbnail: string,
    idAuthor: number,
    idCategory: number,
}

export interface ICreatePostResponse {
    post: Post
}

@Injectable()
export class CreatePostService {
    constructor(
        private userRepository: UserRepository,
        private categoryRepository: CategoryRepository,
        private postRepository: PostRepository,

    ) { }

    async execute({ content, description, idAuthor, idCategory, thumbnail, title }: ICreatePostRequest): Promise<ICreatePostResponse> {

        const author = await this.userRepository.findByID(idAuthor)
        const category = await this.categoryRepository.findByID(idCategory)

        if(!author)
            throw new UserNotFound()


        console.log(category)
        if(!category)
            throw new CategoryNotFound()

        const post = new Post({
            author,
            category,
            content,
            description,
            thumbnail,
            title
        })
        

        await this.postRepository.create(post)

        return {
            post
        }
    }
}
