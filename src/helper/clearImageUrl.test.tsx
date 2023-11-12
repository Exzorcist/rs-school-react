import clearImageUrl from './clearImageUrl.tsx';

const data = {
  incorrect: 'https://test.test/https://test.test/next/' as string,
  correct: 'https://test.test/next/' as string,
};

describe('checking { clearImageUrl } help function', () => {
  it('returns an empty string for null or undefined input', () => {
    expect(clearImageUrl(null)).toBe('');
    expect(clearImageUrl(undefined)).toBe('');
  });

  it('returns a valid URL if the incoming URL is valid', () => {
    expect(clearImageUrl(data.correct)).toBe(data.correct);
  });

  it('returns a valid URL if the incoming URL is invalid', () => {
    expect(clearImageUrl(data.incorrect)).toBe(data.correct);
  });
});
