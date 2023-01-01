import { Controller, Get } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { CreateUserBody } from '../dtos/createUser.body';
import { CreateUserService } from '../use-cases/create-user.service';
import { ListUsersService } from '../use-cases/list-users.service';
import { UserViewMapper } from '../views/user.view';

@Controller('users')
export class UserController {
    constructor(
        private readonly listUsersService: ListUsersService,
        private readonly createUsersService: CreateUserService,
    ) { }

    @Get()
    async findAll() {
        const { users } = await this.listUsersService.execute({})
        return {
            users: users.map(UserViewMapper.toHTTP)
        }
    }

    @Post()
    async create(@Body() body: CreateUserBody) {
        const { name, surname, bio, email, password } = body;
        const { user } = await this.createUsersService.execute({
            name, 
            surname,
            bio, 
            email,
            password 
        })
        return UserViewMapper.toHTTP(user)
    }

}

