import { Injectable } from '@nestjs/common';
import { Post } from '../classes/post.class';
import { PostRepository } from '../repositories/post.repository';

export interface IListPostRequest {}

export interface IListPostResponse {
    posts: Post[]
}

@Injectable()
export class ListPostsService {
    constructor(private postRepository: PostRepository) { }

    async execute(data: IListPostRequest): Promise<IListPostResponse> {
        const posts = await this.postRepository.find()
        return {
            posts
        }
    }
}
