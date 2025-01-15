const { sum } = require('../src/index');

test('soma dois números corretamente', () => {
  expect(sum(1, 2)).toBe(3);
});