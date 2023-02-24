import createErrorThrower from "./create-error-thrower.js";

const throwError = createErrorThrower("zFill");

/** Fills empty indexes with 0 */
function zFill(iterable: any, length: number = String(iterable).length): string {
  if (!iterable) throwError("\"iterable\" parameter is required!");
  const _iterable = String(iterable);
  if (_iterable.length <= length) return _iterable;

  const result = [_iterable];

  for (let i = _iterable.length; i < length; i++) result.unshift("0");
  return result.join("");
};

export default zFill;