import { doSomethingStupid } from '../src/services/smokeTest';

test('doSomethingStupid retorna Hello, World!', () => {
  expect(doSomethingStupid()).toBe("Hello, World!");
});
