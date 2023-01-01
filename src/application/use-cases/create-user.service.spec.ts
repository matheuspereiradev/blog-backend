import Md5Provider from "../../infra/hash/md5/md5.provider";
import { InMemoryUserRepository } from "../../../test/repositories/in-memory-user.repository";
import { CreateUserService } from "./create-user.service";

describe('CreateUserService', () => {
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


  it('Service should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Should be able create an new user', async () => {

    const { user } = await service.execute({
      ...createProps
    })

    expect(user.name).toEqual(createProps.name)
    expect(user.surname).toEqual(createProps.surname)
    expect(user.email).toEqual(createProps.email)
    expect(user.bio).toEqual(createProps.bio)
    expect(await hashProvider.compareHash(createProps.password, user.password)).toBe(true)
  });

});
