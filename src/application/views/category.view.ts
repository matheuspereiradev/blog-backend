import { Category } from "../classes/category.class";


export class CategoryViewMapper {
    static toHTTP({ 
        name, 
        id, 
        icon, 
        description, 
        createdAt 
    }: Category) {
        return {
            id, 
            name, 
            icon, 
            description, 
            createdAt
        }
    }
}