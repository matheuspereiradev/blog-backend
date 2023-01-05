import { Post } from "../classes/post.class";
import { CategoryViewMapper } from "./category.view";
import { UserViewMapper } from "./user.view";


export class PostViewMapper {
    static toHTTP({
        author,
        category,
        content,
        id,
        thumbnail,
        title,
        description,
        createdAt
    }: Post) {
        return {
            id,
            title,
            description,
            content,
            thumbnail,
            author: UserViewMapper.resumedVersion(author),
            category: CategoryViewMapper.resumedVersion(category),
            createdAt
        }
    }
}