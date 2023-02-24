function createErrorThrower(fnName: string) {
  return (err?: string) => {
    throw Error(`[${fnName}] ${err ? ` => ${err}` : ""}`);
  };
};

export default createErrorThrower;
