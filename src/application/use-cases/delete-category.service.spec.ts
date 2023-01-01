import { makeCategory } from '../../../test/factories/notification.factory';
import { InMemoryCategoryRepository } from '../../../test/repositories/in-memory-category.repository';
import { CategoryRepository } from '../repositories/category.repository';
import { DeleteCategoryService } from './delete-category.service';
import { CategoryNotFound } from './errors/CategoryNotFound.error';

describe('DeleteCategoryService', () => {
  let service: DeleteCategoryService;
  let categoryRepository: InMemoryCategoryRepository;

  beforeEach(async () => {
    categoryRepository = new InMemoryCategoryRepository()
    service = new DeleteCategoryService(categoryRepository)
  });

  it('Service should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Should be able delete a category', async () => {
    const category = makeCategory()

    await categoryRepository.create(category)
    expect(categoryRepository.categories).toHaveLength(1)

    await service.execute({
      id: categoryRepository.categories[0].id
    })

    expect(categoryRepository.categories[0].deletedAt).toEqual(
      expect.any(Date)
    )
  });

  it("should not to be able delete a non existing category", async () => {

    expect(() => {
      return service.execute({
        id: -1
      })
    }).rejects.toThrow(CategoryNotFound)

  })
});
