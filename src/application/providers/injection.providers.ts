import { TypeOrmPostRepository } from "../../infra/database/typeorm/repositories/post.repository";
import { TypeOrmCategoryRepository } from "../../infra/database/typeorm/repositories/category.repository";
import { TypeOrmUserRepository } from "../../infra/database/typeorm/repositories/user.repository";
import BCryptHashProvider from "../../infra/hash/bcrypt/bcript.provider";
import { CategoryRepository } from "../repositories/category.repository";
import { PostRepository } from "../repositories/post.repository";
import { UserRepository } from "../repositories/user.repository";
import { HashProvider } from "./hash.provider";

export const injectionProviders = [
    {
        provide: UserRepository,
        useClass: TypeOrmUserRepository
    },
    {
        provide: HashProvider,
        useClass: BCryptHashProvider
    },
    {
        provide: CategoryRepository,
        useClass: TypeOrmCategoryRepository
    },
    {
        provide: PostRepository,
        useClass: TypeOrmPostRepository
    },
];
