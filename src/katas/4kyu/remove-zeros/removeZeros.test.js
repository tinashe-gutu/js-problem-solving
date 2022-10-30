const removeZeros = require("./removeZeros");

test("removeZeros moves zeros to end of array", () => {
  expect(removeZeros([1, 2, 0, 3])).toEqual([1, 2, 3, 0]);
  expect(removeZeros([0, 1, 2, 0, 3])).toEqual([1, 2, 3, 0, 0]);
  expect(removeZeros([1, 2, 0, 3])).toEqual([1, 2, 3, 0]);
  expect(
    removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14])
  ).toEqual([7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]);
});

test("removeZeros moves '0' to end of array", () => {
  expect(removeZeros([1, 2, "0", 3])).toEqual([1, 2, 3, "0"]);
  expect(removeZeros(["0", 1, 2, 0, 3])).toEqual([1, 2, 3, "0", 0]);
  expect(
    removeZeros([7, 2, 3, 0, 4, 6, 0, "0", 13, 0, 78, 0, 0, 19, 14])
  ).toEqual([7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, "0", 0, 0, 0]);
});
