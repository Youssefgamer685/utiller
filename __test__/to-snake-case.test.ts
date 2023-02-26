import { to_snake_case } from "../src";

test("to_snake_case", () => {
  expect(to_snake_case("myName")).toBe("my_name")
});