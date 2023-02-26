import { zip } from "../src";

test("zip", () => {
  expect(zip([1, 2], [3, 4])).toStrictEqual([1, 2, 3, 4]);
  expect(zip({ name: "Youssef" }, { age: 14, job: "programmer" })).toStrictEqual({ name: "Youssef", age: 14, job: "programmer" });
});