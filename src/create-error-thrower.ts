function createError(fn: Function) {
  return (err?: string) => {
    throw Error(`[${fn}] ${err ? ` => ${err}` : ""}`);
  };
};


export default createError;
