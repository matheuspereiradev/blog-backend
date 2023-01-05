import { Injectable } from "@nestjs/common";
import { Category } from "../classes/category.class";
import { CategoryRepository } from "../repositories/category.repository";
import { CategoryNotFound } from "./errors/CategoryNotFound.error";


export interface IRequest {
    id: number
}

type IResponse = void

@Injectable()
export class DeleteCategoryService {
    constructor(private categoryRepository: CategoryRepository) { }

    async execute({ id }: IRequest): Promise<IResponse> {
        const category = await this.categoryRepository.findByID(id);
        if (!category)
            throw new CategoryNotFound();

        category.delete()
        
        await this.categoryRepository.save(category)

        return
    }
}