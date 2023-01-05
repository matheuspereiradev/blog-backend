import { Injectable } from "@nestjs/common";
import { Category } from "../classes/category.class";
import { CategoryRepository } from "../repositories/category.repository";
import { CategoryNotFound } from "./errors/CategoryNotFound.error";


export interface IRequest {
    id: number,
    name: string,
    description: string,
    icon: string
}

export interface IResponse {
    category: Category
}

@Injectable()
export class UpdateCategoryService {
    constructor(private categoryRepository: CategoryRepository) { }

    async execute({ description, name, icon, id }: IRequest): Promise<IResponse> {
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