import { Category } from '../models/category';
import { logger } from '../utils/logger';

export class CategoryService {
  async createCategory(data: any) {
    try {
      const newCategory = await Category.create(data);
      logger.info('Category created successfully', { categoryId: newCategory.id });
      return newCategory;
    } catch (error) {
      logger.error('Error creating category', { error });
      throw new Error('Category creation failed');
    }
  }

  // Additional category-related methods...
}