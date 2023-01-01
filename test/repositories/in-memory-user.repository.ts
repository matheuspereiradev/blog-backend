
import { User } from "../../src/application/classes/user.class"
import { UserRepository } from "../../src/application/repositories/User.repository"

export class InMemoryUserRepository implements UserRepository {
    public categories: User[] = []

    async findByID(id: number): Promise<User> {
        const user = this.categories.find(n => n.id === id)
        return user
    }

    async find(): Promise<User[]> {   
        return this.categories
    }

    async save(user: User): Promise<void> {
        const userIndex = this.categories.findIndex(n => n.id === user.id)

        if (userIndex >= 0)
            this.categories[userIndex] = user
    }

    async create(user: User): Promise<void> {
        this.categories.push(new User(
            {
                name: user.name,
                bio: user.bio,
                email: user.email,
                password: user.password,
                surname: user.surname,
                createdAt: user.createdAt
            }, this.categories.length + 1 
        ))
    }
}