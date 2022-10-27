const isSquare = require("./isSquare");

test("Determine if number is a square number", () => {
  expect(isSquare(5)).toBe(false);
  expect(isSquare(-1)).toBe(false);
  expect(isSquare(25)).toBe(true);
  expect(isSquare(0)).toBe(true);
  expect(isSquare(4)).toBe(true);
});
