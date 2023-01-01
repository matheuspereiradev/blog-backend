import { Module } from '@nestjs/common';
import { DatabaseModule } from '../infra/database/typeorm/database.module';
import { TypeOrmCategoryRepository } from 'src/infra/database/typeorm/repositories/category.repository';
import { CategoryController } from './controllers/category.controller';
import { CategoryRepository } from './repositories/category.repository';
import { CreateCategoryService } from './use-cases/create-category.service';
import { ListCategoriesService } from './use-cases/list-categories.service';
import { UpdateCategoryService } from './use-cases/update-category.service';
import { DeleteCategoryService } from './use-cases/delete-category.service';
import { UserController } from './controllers/user.controller';
import { UserRepository } from './repositories/user.repository';
import { TypeOrmUserRepository } from 'src/infra/database/typeorm/repositories/user.repository';
import { CreateUserService } from './use-cases/create-user.service';
import { ListUsersService } from './use-cases/list-users.service';
import { HashModule } from '../infra/hash/hash.module';
import { HashProvider } from './providers/hash.provider';
import BCryptHashProvider from 'src/infra/hash/bcrypt/bcript.provider';


@Module({
  imports: [DatabaseModule, HashModule],
  controllers: [CategoryController, UserController],
  providers: [
    {
      provide: CategoryRepository,
      useClass: TypeOrmCategoryRepository
    },
    CreateCategoryService,
    ListCategoriesService,
    UpdateCategoryService,
    DeleteCategoryService,
    {
      provide: UserRepository,
      useClass: TypeOrmUserRepository
    },
    {
      provide: HashProvider,
      useClass: BCryptHashProvider
    },
    CreateUserService,
    ListUsersService,
  ],
})
export class DomainModule { }
