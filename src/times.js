export default (n, iteratee, ...iterateeArgs) => {
  const result = [];

  for (let i = 0; i < n; i += 1) {
    result[i] = iteratee(...iterateeArgs);
  }

  return result;
};
