import { ColorHelper } from './ColorHelper';

describe('ColorHelper', () => {
  it('generates a valid hex color string', () => {
    const color = ColorHelper.getRandomColor();
    
    // Проверяем, что строка начинается с #
    expect(color).toMatch(/^#/);

    // Проверяем, что длина строки равна 7 (символ # плюс 6 символов HEX)
    expect(color).toHaveLength(7);

    // Проверяем, что строка содержит только допустимые HEX символы
    expect(color).toMatch(/#([0-9A-F]{6})/i);
  });

  it('generates different colors on multiple calls', () => {
    const color1 = ColorHelper.getRandomColor();
    const color2 = ColorHelper.getRandomColor();
    expect(color1).not.toEqual(color2);
  });
});