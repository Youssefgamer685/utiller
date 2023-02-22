import createErrorThrower from "./create-error-thrower.js";

const throwError = createErrorThrower(range);

/** ``range`` is a function that returns an array of number depending on `to` and `from` parameters */
function range(to: number, from: number = 0): number[] {
  if (!to) throwError("\"to\" parameter is required!");
  if (typeof to !== "number" || (from && typeof from !== "number")) throwError("\"range\" accepts numbers only!");
  
  const result = [];
  for (let i = from; i < to; i++) result.push(i);
  return result;
};

export default range;