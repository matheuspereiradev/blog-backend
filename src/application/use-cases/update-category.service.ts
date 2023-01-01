import { Injectable } from "@nestjs/common";
import { Category } from "../classes/category.class";
import { CategoryRepository } from "../repositories/category.repository";
import { CategoryNotFound } from "./errors/CategoryNotFound.error";


export interface IUpdateCategoryRequest {
    id: number,
    name: string,
    description: string,
    icon: string
}

export interface IUpdateCategoryResponse {
    category: Category
}

@Injectable()
export class UpdateCategoryService {
    constructor(private categoryRepository: CategoryRepository) { }

    async execute({ description, name, icon, id }: IUpdateCategoryRequest): Promise<IUpdateCategoryResponse> {
        const category = await this.categoryRepository.findByID(id);
        if (!category)
            throw new CategoryNotFound();

        category.description = description;
        category.name = name;
        category.icon = icon;

        await this.categoryRepository.save(category)

        return {
            category
        }
    }
}