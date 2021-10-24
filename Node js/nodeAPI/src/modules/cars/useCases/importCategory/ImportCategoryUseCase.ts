import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(file: any) {
    console.log(file);
    // const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    // if (categoryAlreadyExists) {
    //   throw new Error("Category already exists");
    // }

    // this.categoriesRepository.create({ name, description });
  }
}

export { ImportCategoryUseCase };
