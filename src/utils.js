export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;

export const times = (n, iteratee, ...iterateeArgs) => {
  const result = [];

  for (let i = 0; i < n; i += 1) {
    result[i] = iteratee(...iterateeArgs);
  }

  return result;
};
