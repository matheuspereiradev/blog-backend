
import { Category } from "../../src/application/classes/category.class"
import { CategoryRepository } from "../../src/application/repositories/Category.repository"

export class InMemoryCategoryRepository implements CategoryRepository {
    public categories: Category[] = []

    async findByID(id: number): Promise<Category> {
        const category = this.categories.find(n => n.id === id)
        return category
    }
    async find(): Promise<Category[]> {   
        return this.categories
    }


    async save(category: Category): Promise<void> {
        const categoryIndex = this.categories.findIndex(n => n.id === category.id)

        if (categoryIndex >= 0)
            this.categories[categoryIndex] = category
    }

    async create(category: Category): Promise<void> {
        this.categories.push(new Category(
            {
                name: category.name,
                icon: category.icon,
                description: category.description,
            }, this.categories.length + 1 
        ))
    }
}