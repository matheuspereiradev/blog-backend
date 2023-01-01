import { Category, CategoryProps } from "../../src/application/classes/category.class";


type Override = Partial<CategoryProps>;
export function makeCategory(override : Override = {}){
    return new Category({
        name: 'Test Name',
        icon: 'http://test.com',
        description: 'Test description',
        ...override
    })
}