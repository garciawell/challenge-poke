import {
  formatTextToCapitalize,
  formatTextToCapitalizeWithTrace,
  padDigits,
} from './tools';

describe('Tools', () => {
  it('should be able to convert text to capitalize', () => {
    const text = 'charizard bilbo';

    const format = formatTextToCapitalize(text);

    expect(format).toBe('Charizard Bilbo');
  });

  it('should be able to convert text with trace to capitalize', () => {
    const text = 'charizard-bilbo';

    const format = formatTextToCapitalizeWithTrace(text);

    expect(format).toBe('Charizard Bilbo');
  });

  it('should be able to pad number passing number', () => {
    const format = padDigits(1);

    expect(format).toBe('001');
  });

  it('should be able to pad number is bigger than 9 passing string', () => {
    const format = padDigits('10');

    expect(format).toBe('010');
  });

  it('should be not able to pad number is bigger 99 ', () => {
    const format = padDigits('12222');

    expect(format).toBe('12222');
  });
});
