import createErrorThrower from "./create-error-thrower";
import isUndefined from "./is-undefined";

const throwError = createErrorThrower("toCamelCase");

/** Converts any string into camelCase depending on ``separator`` */
function toCamelCase(str: string, separator: string = "_"): string {
  if (isUndefined(str)) throwError("\"str\" parameter is required!");
  if (typeof str !== "string") throwError("\"str\" parameter must be string!");
  if (typeof separator !== "string") throwError("\"separator\" parameter must be string");

  const splittedStr = str.split(separator);
  const result = [];
  for (let i = 0; i < splittedStr.length; i++) {
    if (i === 0) result.push(splittedStr[i].toLowerCase());
    else result.push(`${splittedStr[i][0].toUpperCase()}${splittedStr[i].substr(1).toLowerCase()}`);
  };
  return result.join("");
};

export default toCamelCase;