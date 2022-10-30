const countContiguousDistinct = require("./countContiguousDistinct");

test("countContiguousDistinct returns count of distinct element in each window", () => {
  expect(countContiguousDistinct([1, 2, 1, 3, 4, 2, 3], 4)).toBe([3, 4, 4, 3]);
  expect(countContiguousDistinct([1, 2, 1, 3, 4, 2, 3, 3], 2)).toBe([2, 2, 2, 2, 2, 2, 1]);
  expect(countContiguousDistinct([1, 2, 1, 3, 4, 2, 3, 3], 8)).toBe([4]);
});
