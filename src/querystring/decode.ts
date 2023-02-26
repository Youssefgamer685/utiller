import createErrorThrower from "../create-error-thrower";
import isUndefined from "../is-undefined";
import toCamelCase from "../to-camel-case";

const throwError = createErrorThrower("querystring.decode");

export interface DecodeOptions {
  /**
   * Converts result object keys into camelCase
   * @default true
  */
  camelCase?: boolean;
  /**
   * Separator between every query
   * @default "&"
  */
  separator?: string;
  /**
   * Equal operator between every query key and value
   * @default "="
  */
  equalOperator?: string;
};

/** Decodes ``querystring`` */
function decode<T = {}>(querystring: string, { camelCase = true, separator = "&", equalOperator = "=" }: DecodeOptions = {}): T {
  if (isUndefined(querystring)) throwError("\"querystring\" parameter is required!")
  if (typeof querystring !== "string") throwError("\"querystring\" parameter must be string!");
  if (!querystring.includes(separator)) throwError("Invalid separator!");
  if (!querystring.includes(equalOperator)) throwError("Invalid equal operator!");
  
  const splittedQuery = querystring.replace(/\s/, "").split(separator);
  let result = {};
  for (let i = 0; i < splittedQuery.length; i++) {
    const [key, value] = (splittedQuery[i].split(equalOperator) as [string, string]);
    if (camelCase) result = { ...result, [toCamelCase(key)]: (Number.isNaN(+value) ? value : +value) };
    else result = { ...result, [key]: (Number.isNaN(+value) ? value : +value) };
  };
  return result as T;
};

export default decode;