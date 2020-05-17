import {
  formatTextToCapitalize,
  formatTextToCapitalizeWithTrace,
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
});
