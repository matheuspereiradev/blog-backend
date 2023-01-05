import { Injectable } from '@nestjs/common';
import { User } from '../classes/user.class';
import { HashProvider } from '../providers/hash.provider';
import { UserRepository } from '../repositories/user.repository';

export interface IRequest {
    name: string,
    surname: string,
    email: string,
    password: string,
    bio: string
}

export interface IResponse {
    user: User
}

@Injectable()
export class CreateUserService {
    constructor(
        private userRepository: UserRepository,
        private hashProvider: HashProvider
    ) { }

    async execute({ bio, email, name, password, surname }: IRequest): Promise<IResponse> {
        
        const passwordEncripted = await this.hashProvider.genarateHash(password)
        const user = new User({
            bio,
            email,
            name,
            password: passwordEncripted,
            surname
        });

        await this.userRepository.create(user)

        return {
            user
        }
    }
}
