import { Injectable } from '@nestjs/common';
import { User } from '../classes/user.class';
import { UserRepository } from '../repositories/user.repository';

export interface IRequest {}

export interface IResponse {
    users: User[]
}

@Injectable()
export class ListUsersService {
    constructor(private userRepository: UserRepository) { }

    async execute(data: IRequest): Promise<IResponse> {
        const users = await this.userRepository.find()
        return {
            users
        }
    }
}
