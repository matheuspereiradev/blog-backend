import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CreateCategoryBody } from '../dtos/createCategory.body';
import { UpdateCategoryBody } from '../dtos/updateCategory.body';
import { successfullyDeleted } from '../helpers/ExcludedSuccessful';
import { CreateCategoryService } from '../use-cases/create-category.service';
import { DeleteCategoryService } from '../use-cases/delete-category.service';
import { ListCategoriesService } from '../use-cases/list-categories.service';
import { UpdateCategoryService } from '../use-cases/update-category.service';
import { CategoryViewMapper } from '../views/category.view';

@Controller('categories')
export class CategoryController {
    constructor(
        private readonly createCategoryService: CreateCategoryService,
        private readonly updateCategoryService: UpdateCategoryService,
        private readonly deleteCategoryService: DeleteCategoryService,
        private readonly listCategoryService: ListCategoriesService,
    ) { }

    @Get()
    async findAll() {
        const { categories } = await this.listCategoryService.execute({})
        return {
            categories: categories.map(CategoryViewMapper.toHTTP)
        }
    }

    @Post()
    async create(@Body() body: CreateCategoryBody) {
        const { description, icon, name } = body;
        const { category } = await this.createCategoryService.execute({
            description,
            icon,
            name
        })

        return CategoryViewMapper.toHTTP(category)
    }

    @Put(':id')
    async update(@Body() body: UpdateCategoryBody, @Param('id') id: number) {
        const { description, icon, name } = body;
        const { category } = await this.updateCategoryService.execute({
            description,
            icon,
            name,
            id
        })

        return CategoryViewMapper.toHTTP(category)
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {

        await this.deleteCategoryService.execute({
            id
        })

        return successfullyDeleted
    }

}
