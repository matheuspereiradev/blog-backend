import { Injectable } from "@nestjs/common";
import { Category } from "../classes/category.class";
import { CategoryRepository } from "../repositories/category.repository";

export interface IListCategoryRequest {}

export interface IListCategoryResponse {
    categories: Category[]
}

@Injectable()
export class ListCategoriesService {
    constructor(private categoryRepository: CategoryRepository) { }

    async execute(data: IListCategoryRequest): Promise<IListCategoryResponse> {
        const categories = await this.categoryRepository.find()
        return {
            categories
        }
    }
}