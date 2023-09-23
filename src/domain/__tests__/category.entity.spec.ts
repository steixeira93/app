import { Category } from "../category.entity";

describe('Category Unit Tests', () => {
  describe('Constructor', () => {
    test('should create a category with default values', () => {
      const category = new Category({
        name: 'Movie'
      });

      expect(category.category_id).toBeUndefined();
      expect(category.name).toBe('Movie');
      expect(category.description).toBeNull();
      expect(category.is_active).toBeTruthy();
      expect(category.created_at).toBeInstanceOf(Date);
    })

    test('should create a category with all values', () => {
      const category = new Category({
        category_id: '123',
        name: 'Movie',
        description: 'Movies category',
        is_active: false,
        created_at: new Date('2021-01-01')
      });

      expect(category.category_id).toBe('123');
      expect(category.name).toBe('Movie');
      expect(category.description).toBe('Movies category');
      expect(category.is_active).toBeFalsy();
      expect(category.created_at).toBeInstanceOf(Date);
    })
  });

  describe('Create command', () => {
    test('should create a category', () => {
      const category = Category.create({
        name: 'Movie'
      });

      expect(category.category_id).toBeUndefined();
      expect(category.name).toBe('Movie');
      expect(category.description).toBeNull();
      expect(category.is_active).toBeTruthy();
      expect(category.created_at).toBeInstanceOf(Date);
    });

    test('should create a category with description', () => {
      const category = Category.create({
        name: 'Movie',
        description: 'Some description'
      });

      expect(category.category_id).toBeUndefined();
      expect(category.name).toBe('Movie');
      expect(category.description).toBe('Some description');
      expect(category.is_active).toBeTruthy();
      expect(category.created_at).toBeInstanceOf(Date);
    });

    test('should create a category with is_active', () => {
      const category = Category.create({
        name: 'Movie',
        is_active: false
      });

      expect(category.category_id).toBeUndefined();
      expect(category.name).toBe('Movie');
      expect(category.description).toBeNull();
      expect(category.is_active).toBeFalsy();
      expect(category.created_at).toBeInstanceOf(Date);
    });

    //TODO - teste do category_id

    test('should change name', () => {
      const category = Category.create({
        name: 'Movie'
      });

      category.changename('Other name');

      expect(category.name).toBe('Other name');
    });

    test('should change description', () => {
      const category = Category.create({
        name: 'Movie'
      });

      category.changeDescription('Some description');

      expect(category.description).toBe('Some description');
    });

    test('should active a category', () => {
      const category = Category.create({
        name: 'Movie',
        is_active: false
      });

      category.activate();

      expect(category.is_active).toBeTruthy();
    });
  })
});