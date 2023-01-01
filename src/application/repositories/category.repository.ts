import { Category } from "../classes/category.class";

export abstract class CategoryRepository {
    abstract create(category:Category):Promise<void>;
    abstract save(category:Category):Promise<void>;
    abstract findByID(id:number):Promise<Category|null>;
    abstract find():Promise<Category[]>;
}