
import { Injectable } from "@nestjs/common";
import { Category } from "../classes/category.class";
import { CategoryRepository } from "../repositories/category.repository";


export interface ICreateCategoryRequest {
    name: string,
    description: string,
    icon: string
}

export interface ICreateCategoryResponse {
    category: Category
}

@Injectable()
export class CreateCategoryService {
    constructor(private categoryRepository: CategoryRepository) { }

    async execute({description, name, icon}: ICreateCategoryRequest): Promise<ICreateCategoryResponse> {
        const category = new Category({
            description,
            name,
            icon
        });

        await this.categoryRepository.create(category)
        
        return {
            category
        }
    }
}