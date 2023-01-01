import { Injectable } from "@nestjs/common";
import { Category } from "../classes/category.class";
import { CategoryRepository } from "../repositories/category.repository";
import { CategoryNotFound } from "./errors/CategoryNotFound.error";


export interface IDeleteCategoryRequest {
    id: number
}

type IDeleteCategoryResponse = void

@Injectable()
export class DeleteCategoryService {
    constructor(private categoryRepository: CategoryRepository) { }

    async execute({ id }: IDeleteCategoryRequest): Promise<IDeleteCategoryResponse> {
        const category = await this.categoryRepository.findByID(id);
        if (!category)
            throw new CategoryNotFound();

        category.delete()
        
        await this.categoryRepository.save(category)

        return
    }
}