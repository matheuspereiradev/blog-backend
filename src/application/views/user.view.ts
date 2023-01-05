import { User } from "../classes/user.class";

export class UserViewMapper {
    static toHTTP({
        id,
        name,
        bio,
        email,
        surname,
        createdAt
    }: User) {
        return {
            id,
            name,
            surname,
            email,
            bio,
            createdAt
        }
    }

    static resumedVersion({
        id,
        name,
        email,
        surname
    }: User) {
        return {
            id,
            name,
            email,
            surname
        }
    }
}