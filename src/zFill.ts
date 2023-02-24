import createErrorThrower from "./create-error-thrower.js";

const throwError = createErrorThrower();

/** Fills empty indexes with 0 */
function zFill(iterable: any, length: number) {
  const _iterable = String(iterable);
  const result = [];
  
  for (let i = 0; i < length; i++) result.unshift(_iterable[i] ? _iterable[i] : "0");
  return result.join("");
};