import { querystring } from "../src";

test("querystring", () => {
  // Decode
  expect(querystring.decode("first_name=MyName&age=20")).toStrictEqual({ firstName: "MyName", age: 20 });
  expect(querystring.decode("first_name=MyName&age=20", { camelCase: false })).toStrictEqual({ first_name: "MyName", age: 20 });
  expect(querystring.decode("first_name:MyName,age:20", { camelCase: false, separator: ",", equalOperator: ":" })).toStrictEqual({ first_name: "MyName", age: 20 });

  // Encode
  expect(querystring.encode({ firstName: "Name", age: 20 })).toStrictEqual("first_name=Name&age=20");
  expect(querystring.encode({ firstName: "Name", age: 20 }, { snake_case: false })).toStrictEqual("firstName=Name&age=20");
  expect(querystring.encode({ firstName: "Name", age: 20 }, { snake_case: false, separator: ",", equalOperator: ":" })).toStrictEqual("firstName:Name,age:20");

  // Has
  expect(querystring.has("first_name=MyName&age=20", "firstName")).toBe(true);
  expect(querystring.has("first_name=MyName&age=20", "firstNamee")).toBe(false);
  expect(querystring.has("first_name=MyName&age=20", ["firstName", "agee"])).toStrictEqual([true, false]);
  expect(querystring.has("first_name=MyName&age=20", "first_name", { camelCase: false })).toBe(true);
  expect(querystring.has("first_name=MyName&age=20", "first_namee", { camelCase: false })).toBe(false);
  expect(querystring.has("first_name=MyName&age=20", ["first_name", "age"], { camelCase: false })).toStrictEqual([true, true]);
  expect(querystring.has("first_name=MyName&age=20", ["first_namee", "age"], { camelCase: false })).toStrictEqual([false, true]);
});