import { InvalidUuidError, Uuid } from "../uuid.vo"
import { validate as uuidValidate } from "uuid";

describe('Uuid Unit Tests', () => {

  const validateSpy = jest.spyOn(Uuid.prototype as any, 'validate');

  test('Should throw error when uuid is invalid', () => {
    expect(() => {
      new Uuid('invalid-uuid');
    }).toThrowError(new InvalidUuidError());
    expect(validateSpy).toHaveBeenCalledTimes(1);
  });

  test('should create a valid uuid', () => {
    const uuid = new Uuid();
    expect(uuid).toBeDefined();
    expect(uuidValidate(uuid.id)).toBe(true);
    expect(validateSpy).toHaveBeenCalledTimes(1);
  });

  test('should accept a valid uuid', () => {
    const uuid = new Uuid('c4e0e7e0-9c1a-4b6e-8e9a-2b2e0f1f7b1e');
    expect(uuid.id).toBe('c4e0e7e0-9c1a-4b6e-8e9a-2b2e0f1f7b1e');
    expect(validateSpy).toHaveBeenCalledTimes(1);
  });
});