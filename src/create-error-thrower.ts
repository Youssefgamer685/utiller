function createErrorThrower(fn: Function) {
  return (err?: string) => {
    throw Error(`[${fn.name}] ${err ? ` => ${err}` : ""}`);
  };
};

export default createErrorThrower;
