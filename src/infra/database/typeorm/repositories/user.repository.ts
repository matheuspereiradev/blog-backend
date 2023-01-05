
import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/application/classes/user.class';
import { UserRepository } from 'src/application/repositories/user.repository';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { TypeormUserMapper } from '../mappers/user.mappers';

@Injectable()
export class TypeOrmUserRepository implements UserRepository {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<UserEntity>,
    ) { }

    async create(user: User): Promise<void> {
        const row = TypeormUserMapper.toTypeOrm(user)
        await this.userRepository.save(row)
    }

    async save(user: User): Promise<void> {
        const row = TypeormUserMapper.toTypeOrm(user)
        await this.userRepository.save(row)
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.userRepository.findOne({
            where: {
                email
            }
        })
        if (user)
            return TypeormUserMapper.toDomain(user)
        return null
    }

    async findByID(id: number): Promise<User> {
        const user = await this.userRepository.findOne({
            where: {
                id
            }
        })
        if (user)
            return TypeormUserMapper.toDomain(user)
        return null
    }

    async find(): Promise<User[]> {
        const users = await this.userRepository.find()
        return users.map(user => TypeormUserMapper.toDomain(user))
    }

}