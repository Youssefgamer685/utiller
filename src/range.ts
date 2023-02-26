import createErrorThrower from "./create-error-thrower";
import isUndefined from "./is-undefined";

const throwError = createErrorThrower("range");

/** returns an array of number depending on `to` and `from` parameters. */
function range(to: number, from: number = 0): number[] {
  if (isUndefined(to)) throwError("\"to\" parameter is required!");
  if (typeof to !== "number" || (!isUndefined(from) && typeof from !== "number")) throwError("\"range\" accepts numbers only!");
  
  const result = [];
  if (from && from > to) {
    for (let i = to; i <= from; i++) result.unshift(i);
  } else {
    for (let i = from; i < to; i++) result.push(i);
  };
  return result;
};

export default range;