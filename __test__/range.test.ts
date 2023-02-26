import { range } from "../src";

test("range", () => {
  expect(range(10)).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(range(10, 3)).toStrictEqual([3, 4, 5, 6, 7, 8, 9]);
  expect(range(0, 10)).toStrictEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
});