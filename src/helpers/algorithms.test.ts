import { SeededRandom } from './algorithms';

describe('SeededRandom', () => {
  it('generates a predictable sequence of numbers with a given seed', () => {
    const seed = 123;
    const random = new SeededRandom(seed);
    const firstNumber = random.nextInRange(0, 100);
    const secondNumber = random.nextInRange(0, 100);

    const random2 = new SeededRandom(seed);
    expect(random2.nextInRange(0, 100)).toBe(firstNumber);
    expect(random2.nextInRange(0, 100)).toBe(secondNumber);
  });

  it('generates numbers within the specified range', () => {
    const seed = 456;
    const random = new SeededRandom(seed);
    const min = 10;
    const max = 20;

    for (let i = 0; i < 100; i++) {
      const number = random.nextInRange(min, max);
      expect(number).toBeGreaterThanOrEqual(min);
      expect(number).toBeLessThanOrEqual(max);
    }
  });
});