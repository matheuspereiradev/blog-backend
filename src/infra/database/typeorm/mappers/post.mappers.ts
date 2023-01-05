import { Category } from "src/application/classes/category.class"
import { User } from "src/application/classes/user.class"
import { Post } from "../../../../application/classes/post.class"
import { PostEntity } from "../entities/post.entity"

export class TypeormPostMapper {
    static toDomain({
        id,
        title,
        content,
        author,
        category,
        description,
        thumbnail
    }: PostEntity): Post {

        const authorPublisher = new User({
            email: author.email,
            name: author.name,
            bio: author.bio,
            surname: author.surname,
            password: author.password,
        },author.id)

        const categoryPost = new Category({
            name: category.name,
            description: category.description,
            icon: category.icon
        },author.id)


        return new Post({
            title,
            content,
            author: authorPublisher,
            category: categoryPost,
            description,
            thumbnail

        }, id)
    }

    static toTypeOrm(post: Post) {
        return {
            content: post.content,
            description: post.description,
            id: post.id,
            thumbnail: post.thumbnail,
            title: post.title,
            id_author: post.author.id,
            id_category: post.category.id,
        }
    }
}