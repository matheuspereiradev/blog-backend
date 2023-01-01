import Md5Provider from '../../infra/hash/md5/md5.provider';
import { InMemoryUserRepository } from '../../../test/repositories/in-memory-user.repository';
import { CreateUserService } from './create-user.service';

describe('ListUsersService', () => {
  let service: CreateUserService;
  let userRepository: InMemoryUserRepository;
  let hashProvider: Md5Provider;

  const createProps = {
    email: 'email@email.com',
    password: 'password',
    bio: 'test@test.com',
    name: 'Test',
    surname: 'Software'
  }

  beforeEach(async () => {
    userRepository = new InMemoryUserRepository()
    hashProvider = new Md5Provider()
    service = new CreateUserService(
      userRepository,
      hashProvider
    )
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
