export const isEven = (num) => num % 2 === 0;

export const getRandomNumbers = (min, max, numsCount) => {
  const nums = [];

  for (let i = 0; i < numsCount; i += 1) {
    const num = Math.floor(Math.random() * (max + 1 - min)) + min;
    nums.push(num);
  }

  return nums;
};

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

export const getGcd = (num1, num2) => {
  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);

  while (min > 0) {
    [min, max] = [max % min, min];
  }

  return max;
};
