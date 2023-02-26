function isUndefined(...data: any[]): boolean {
  return data.every((i) => i === undefined || i === null);
};

export default isUndefined;