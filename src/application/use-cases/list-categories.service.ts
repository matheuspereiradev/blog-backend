import { Injectable } from "@nestjs/common";
import { Category } from "../classes/category.class";
import { CategoryRepository } from "../repositories/category.repository";

export interface IRequest {}

export interface IResponse {
    categories: Category[]
}

@Injectable()
export class ListCategoriesService {
    constructor(private categoryRepository: CategoryRepository) { }

    async execute(data: IRequest): Promise<IResponse> {
        const categories = await this.categoryRepository.find()
        return {
            categories
        }
    }
}