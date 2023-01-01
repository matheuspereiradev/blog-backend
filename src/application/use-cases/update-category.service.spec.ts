import { makeCategory } from '../../../test/factories/notification.factory';
import { InMemoryCategoryRepository } from '../../../test/repositories/in-memory-category.repository';
import { CategoryNotFound } from './errors/CategoryNotFound.error';
import { UpdateCategoryService } from './update-category.service';

describe('UpdateCategoryService', () => {
  let service: UpdateCategoryService;
  let categoryRepository: InMemoryCategoryRepository;
  const updatedProps = {
    description: 'Updated Description',
    icon: 'http://update.com',
    name: 'Updated Name',
  }

  beforeEach(async () => {
    categoryRepository = new InMemoryCategoryRepository()
    service = new UpdateCategoryService(categoryRepository)
  });

  it('Service should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Should be able update an existing category', async () => {
    const row = makeCategory()

    await categoryRepository.create(row)
    expect(categoryRepository.categories).toHaveLength(1)

    const { category } = await service.execute({
      ...updatedProps,
      id: categoryRepository.categories[0].id
    })

    expect(category.name).toEqual(updatedProps.name)
    expect(category.icon).toEqual(updatedProps.icon)
    expect(category.description).toEqual(updatedProps.description)
  });

  it("should not to be able update a non existing category", async () => {

    expect(() => {
      return service.execute({
        ...updatedProps,
        id: -1
      })
    }).rejects.toThrow(CategoryNotFound)

  })
});
