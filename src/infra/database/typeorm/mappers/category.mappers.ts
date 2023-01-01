import { Category } from "src/application/classes/category.class"
import { CategoryEntity } from "../entities/category.entity"

export class TypeormCategoryMapper {
    static toDomain(category: CategoryEntity): Category {
        return new Category({
            name: category.name,
            description: category.description,
            icon: category.icon,
        }, category.id)
    }

    static toTypeOrm(category: Category) {
        return {
            id: category.id,
            name: category.name,
            description: category.description,
            icon: category.icon,
            deletedAt: category.deletedAt,
        }
    }
}