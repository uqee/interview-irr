import validBraces from './index';

test('() -> true', () => {
  expect(validBraces('()')).toEqual(true);
});

test('[) -> false', () => {
  expect(validBraces('[)')).toEqual(false);
});

test('{}[]() -> true', () => {
  expect(validBraces('{}[]()')).toEqual(true);
});

test('([{}]) -> true', () => {
  expect(validBraces('([{}])')).toEqual(true);
});

test('())({}}{()][][ -> false', () => {
  expect(validBraces('())({}}{()][][')).toEqual(false);
});
