import { DataSource } from 'typeorm';
import { CategoryEntity } from '../entities/category.entity';
import { UserEntity } from '../entities/user.entity';

export const repositoriesProviders = [
  {
    provide: 'CATEGORY_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CategoryEntity),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(UserEntity),
    inject: ['DATA_SOURCE'],
  },
];
