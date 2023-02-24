import createErrorThrower from "./create-error-thrower.js";

const throwError = createErrorThrower("zip");

/** 
 * ``zip`` is a function that zip all given data to one iterable.
 * - Note: If you want to zip objects, you should set generic type (Typescript only).
*/
function zip<T = any>(...data: any[]): T {
  if (data.length === 0) throwError("There is no any given data to zip!");
  if (data.some((i) => typeof i === "object" && !Array.isArray(i))) {
    if (data.some((i) => typeof i !== "object")) throwError("Cannot zip objects with any other data!");
    else {
      let result = {};
      for (const i of data) result = {...result, ...i};
      return result as T;
    };
  };
  
  const result = [];
  for (const i of data) {
    if (Array.isArray(i)) result.push(...i);
    if (typeof i !== "object") result.push(i);
  };
  return result as T;
};

export default zip;