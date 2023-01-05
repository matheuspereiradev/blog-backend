import { Injectable } from '@nestjs/common';
import { Post } from '../classes/post.class';
import { PostRepository } from '../repositories/post.repository';

export interface IRequest {}

export interface IResponse {
    posts: Post[]
}

@Injectable()
export class ListPostsService {
    constructor(private postRepository: PostRepository) { }

    async execute(data: IRequest): Promise<IResponse> {
        const posts = await this.postRepository.find()
        return {
            posts
        }
    }
}
