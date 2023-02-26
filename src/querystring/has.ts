import createErrorThrower from "../create-error-thrower";
import decode from "./decode";
import isUndefined from "../is-undefined";
import type { DecodeOptions } from "./decode";

const throwError = createErrorThrower("querystring.has")

/** Checks if has key */
function has(querystring: string, keys: string | string[], decodeOptions: DecodeOptions = {}): boolean | boolean[] {
  if (isUndefined(querystring)) throwError("\"querystring\" parameter is required!");
  if (isUndefined(keys)) throwError("\"key\" parameter is required!");
  if (typeof querystring !== "string") throwError("\"querystring\" parameter must be string!");
  if (typeof keys !== "string" && !Array.isArray(keys)) throwError("\"key\" parameter must be string or array of string!");

  const decodedQuery = decode(querystring, decodeOptions);
  return Array.isArray(keys) ? keys?.map((key) => key in decodedQuery) : keys in decodedQuery;
};

export default has;