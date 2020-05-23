export const isEven = (num) => num % 2 === 0;

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;

export const calc = (operand1, operand2, operator) => {
  let result = null;

  if (operator === '+') {
    result = operand1 + operand2;
  } else if (operator === '-') {
    result = operand1 - operand2;
  } else if (operator === '*') {
    result = operand1 * operand2;
  }

  return result;
};
