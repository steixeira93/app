import { ValueObject } from "../value-object";

class StringValueObject extends ValueObject {
  constructor(readonly value: string) {
    super();
  }
}

class ComplexValueObject extends ValueObject {
  constructor(readonly value: string, readonly value2: number) {
    super();
  }
}

describe('ValueObject Unit Test', () => {
  test('should be equal', () => {
    const vo1 = new StringValueObject('test');
    const vo2 = new StringValueObject('test');
    expect(vo1.equals(vo2)).toBe(true);

    const complexValueObject1 = new ComplexValueObject('test', 1);
    const complexValueObject2 = new ComplexValueObject('test', 1);
    expect(complexValueObject1.equals(complexValueObject2)).toBe(true);
  });

  test('should not be equal', () => {
    const vo1 = new StringValueObject('test');
    const vo2 = new StringValueObject('test2');
    expect(vo1.equals(vo2)).toBe(false);

    const complexValueObject1 = new ComplexValueObject('test', 1);
    const complexValueObject2 = new ComplexValueObject('test', 2);
    expect(complexValueObject1.equals(complexValueObject2)).toBe(false);
  });
})