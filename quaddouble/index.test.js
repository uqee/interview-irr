import quaddouble from './index';

test('(45568411115, 11223344) -> true', () => {
  expect(quaddouble(45568411115, 11223344)).toBe(true);
});

test('(11112344445, 442253) -> true', () => {
  expect(quaddouble(11112344445, 442253)).toBe(true);
});

test('(12222345, 123452) -> false', () => {
  expect(quaddouble(12222345, 123452)).toBe(false);
});

test('(12345, 12345) -> false', () => {
  expect(quaddouble(12345, 12345)).toBe(false);
});