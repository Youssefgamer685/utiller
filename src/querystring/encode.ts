import createErrorThrower from "../create-error-thrower";
import isUndefined from "../is-undefined";
import to_snake_case from "../to-snake-case";

const throwError = createErrorThrower("querystring.encode");

interface EncodeOptions {
  /**
   * Converts result query keys into snake_case
   * @default true
  */
  snake_case?: boolean;
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

/** Encodes object to querystring */
function encode<T = {}>(obj: T, { snake_case = true, separator = "&", equalOperator = "=" }: EncodeOptions = {}): string {
  if (isUndefined(obj)) throwError("\"obj\" parameter is required!");
  if (typeof obj !== "object" || Array.isArray(obj)) throwError("\"obj\" parameter must be object!");
  
  const result = [];
  for (const key in obj) result.push(`${snake_case ? to_snake_case(key) : key}${equalOperator}${obj[key]}`);
  return result.join(separator);
};

export default encode;