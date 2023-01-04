import { User } from "../classes/user.class";

export abstract class UserRepository {
    abstract create(user:User):Promise<void>;
    abstract save(user:User):Promise<void>;
    abstract findByID(id:number):Promise<User|null>;
    abstract findByEmail(email:string):Promise<User|null>;
    abstract find():Promise<User[]>;
}