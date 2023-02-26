import createErrorThrower from "./create-error-thrower";
import isUndefined from "./is-undefined";

const throwError = createErrorThrower("to_snake_case");

/** Converts camelCase string into snake_case depending on ``separator`` */
function to_snake_case(camelCaseStr: string): string {
  if (isUndefined(camelCaseStr)) throwError("\"camelCaseStr\" parameter is required!");
  if (typeof camelCaseStr !== "string") throwError("\"camelCaseStr\" parameter must be string!")
  
  const result = [];
  for (let i = 0; i < camelCaseStr.length; i++) result.push(`${camelCaseStr[i] === camelCaseStr[i].toUpperCase() ? "_" : ""}${camelCaseStr[i].toLowerCase()}`);
  return result.join("");
};

export default to_snake_case;