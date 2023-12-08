import { say } from './say';

describe('say test', () => {
  test('say hello', () => {
    expect(say('hello')).toBe('hello');
  });
});
