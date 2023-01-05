import { Post } from "../classes/post.class";

export abstract class PostRepository {
    abstract create(post:Post):Promise<void>;
    abstract save(post:Post):Promise<void>;
    abstract findByID(id:number):Promise<Post|null>;
    abstract find():Promise<Post[]>;
}