import { toCamelCase } from "../src";

test("toCamelCase", () => {
  expect(toCamelCase("Hello_World")).toBe("helloWorld");
  expect(toCamelCase("Hello World", " ")).toBe("helloWorld");
  expect(toCamelCase("HelloWorld")).toBe("helloworld");
});