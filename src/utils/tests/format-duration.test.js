import formatDuration from '../format-duration';

describe('formatDuration', () => {
  [
    { millis: 0, expected: '00:00:00' },
    { millis: 999, expected: '00:00:00' },
    { millis: 1000, expected: '00:00:01' },
    { millis: 20000, expected: '00:00:20' },
    { millis: 500210, expected: '00:08:20' },
    { millis: 1002100, expected: '00:16:42' },
    { millis: 10230100, expected: '02:50:30' },
    { millis: 60230100, expected: '16:43:50' },
    { millis: 610230100, expected: '169:30:30' },
  ].forEach((testCase) => {
    it(`should convert ${testCase.millis} to ${testCase.expected}`, () => {
      expect(formatDuration(testCase.millis)).toBe(testCase.expected);
    });
  });
});
