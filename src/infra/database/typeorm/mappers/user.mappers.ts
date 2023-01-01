import { User } from "src/application/classes/user.class"
import { UserEntity } from "../entities/user.entity"

export class TypeormUserMapper {
    static toDomain(user: UserEntity): User {
        return new User({
            name: user.name,
            bio: user.bio,
            email: user.email,
            password: user.password,
            surname: user.surname,
        }, user.id)
    }

    static toTypeOrm(user: User) {
        return {
            id: user.id,
            name: user.name,
            bio: user.bio,
            email: user.email,
            password: user.password,
            surname: user.surname,
            deletedAt: user.deletedAt,
        }
    }
}