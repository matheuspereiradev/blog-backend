import { Injectable } from '@nestjs/common';
import { User } from '../classes/user.class';
import { UserRepository } from '../repositories/user.repository';

export interface IListUserRequest {}

export interface IListUserResponse {
    users: User[]
}

@Injectable()
export class ListUsersService {
    constructor(private userRepository: UserRepository) { }

    async execute(data: IListUserRequest): Promise<IListUserResponse> {
        const users = await this.userRepository.find()
        return {
            users
        }
    }
}
