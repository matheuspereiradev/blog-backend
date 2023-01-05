
import { Inject, Injectable } from '@nestjs/common';
import { Category } from 'src/application/classes/category.class';
import { CategoryRepository } from 'src/application/repositories/category.repository';
import { Repository } from 'typeorm';
import { CategoryEntity } from '../entities/category.entity';
import { TypeormCategoryMapper } from '../mappers/category.mappers';

@Injectable()
export class TypeOrmCategoryRepository implements CategoryRepository {
    constructor(
        @Inject('CATEGORY_REPOSITORY')
        private categoryRepository: Repository<CategoryEntity>,
    ) { }
    
    async create(category: Category): Promise<void> {
        const row = TypeormCategoryMapper.toTypeOrm(category)
        await this.categoryRepository.save(row)
    }
    
    async save(category: Category): Promise<void> {
        const row = TypeormCategoryMapper.toTypeOrm(category)
        await this.categoryRepository.save(row)
    }

    async findByID(id: number): Promise<Category> {
        const category = await this.categoryRepository.findOne({
            where: {
                id
            }
        })
        if(category)
            return TypeormCategoryMapper.toDomain(category)
        return null
    }

    async find(): Promise<Category[]> {
        const categories = await this.categoryRepository.find()
        return categories.map(category => TypeormCategoryMapper.toDomain(category))
    }

}