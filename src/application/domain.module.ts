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
import { AuthService } from './use-cases/auth.service';
import BCryptHashProvider from 'src/infra/hash/bcrypt/bcript.provider';
import { PassportModule } from '@nestjs/passport/dist';
import { LocalStrategy } from './guards/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/jwt.constants';
import { JwtStrategy } from './guards/jwt.strategy';
import { injectionProviders } from './providers/injection.providers';
import { ListPostsService } from './use-cases/list-posts.service';
import { PostController } from './controllers/post.controller';
import { CreatePostService } from './use-cases/create-post.service';
import { UpdatePostService } from './use-cases/update-post.service';


@Module({
  imports: [
    DatabaseModule,
    HashModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '500s' },
    }),
  ],
  controllers: [
    CategoryController, 
    UserController,
    PostController
  ],
  providers: [
    ...injectionProviders,
    CreateCategoryService,
    ListCategoriesService,
    UpdateCategoryService,
    DeleteCategoryService,
    CreateUserService,
    ListUsersService,
    AuthService,
    LocalStrategy,
    JwtStrategy,
    ListPostsService,
    CreatePostService,
    UpdatePostService
  ],
})
export class DomainModule { }
