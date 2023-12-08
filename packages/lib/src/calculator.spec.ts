import { add } from './calculator';

describe('calculator test', () => {
  test('add', () => {
    expect(add(1, 2)).toBe(3);
  });
});
