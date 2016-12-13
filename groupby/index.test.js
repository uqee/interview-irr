import './index';

const a = [1, 2, 3, 2, 4, 1, 5, 1, 6];

test('default', () => {
  expect(a.groupby())
    .toEqual({
      1: [1, 1, 1],
      2: [2, 2],
      3: [3],
      4: [4],
      5: [5],
      6: [6],
    });
});

test('val => val % 3', () => {
  expect(a.groupby(val => val % 3))
    .toEqual({
      0: [3, 6],
      1: [1, 4, 1, 1],
      2: [2, 2, 5],
    });
});
