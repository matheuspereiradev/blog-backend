import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { Request, UseGuards } from '@nestjs/common/decorators';
import { CreatePostBody } from '../dtos/createPost.body';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { successfullyDeleted } from '../helpers/ExcludedSuccessful';
import { CreatePostService } from '../use-cases/create-post.service';
import { ListPostsService } from '../use-cases/list-posts.service';
import { PostViewMapper } from '../views/post.view';

@Controller('posts')
export class PostController {
    constructor(
        private readonly createPostService: CreatePostService,
        // private readonly updatePostService: UpdatePostService,
        // private readonly deletePostService: DeletePostService,
        private readonly listPostService: ListPostsService,
    ) { }

    @Get()
    async findAll() {
        const { posts } = await this.listPostService.execute({})
        return {
            posts: posts.map(PostViewMapper.toHTTP)
        }
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() body: CreatePostBody, @Request() req) {
        const { content, description, thumbnail, title, idCategory } = body;
        const idAuthor = req.user.userId;
    
        const { post } = await this.createPostService.execute({
            description,
            content,
            thumbnail,
            title,
            idAuthor,
            idCategory
        })
        return PostViewMapper.toHTTP(post)
    }

    // @UseGuards(JwtAuthGuard)
    // @Put(':id')
    // async update(@Body() body: UpdatePostBody, @Param('id') id: number) {
    //     const { description, icon, name } = body;
    //     const { post } = await this.updatePostService.execute({
    //         description,
    //         icon,
    //         name,
    //         id
    //     })

    //     return PostViewMapper.toHTTP(post)
    // }

    // @UseGuards(JwtAuthGuard)
    // @Delete(':id')
    // async delete(@Param('id') id: number) {
    //     await this.deletePostService.execute({
    //         id
    //     })
    //     return successfullyDeleted
    // }

}
