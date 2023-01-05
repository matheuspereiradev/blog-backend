import { Test, TestingModule } from '@nestjs/testing';
import { ListPostsService } from './list-posts.service';

describe('ListPostsService', () => {
  let service: ListPostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListPostsService],
    }).compile();

    service = module.get<ListPostsService>(ListPostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
