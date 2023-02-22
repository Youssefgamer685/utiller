import createErrorThrower from "./create-error-thrower.js";

const throwError = createErrorThrower(wait);

/** Wait for ``timeout`` to call function */
function wait(timeout: number, ...cbArgs?: any[]): Promise<any> {
  if (!timeout) throwError("\"timeout\" parameter is required!");
  if (typeof timeout !== "number") throwError("\"timeout\" must be number!");
  return new Promise((resolve) => {
    setTimeout(() => resolve(...cbArgs), timeout);
  });
};

export default wait;