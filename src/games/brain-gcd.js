import { getRandomNumbers } from '../math.js';

const getGcd = (num1, num2) => {
  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);

  while (min > 0) {
    [min, max] = [max % min, min];
  }

  return max;
};

const getQuestionAndAnswer = () => {
  const [num1, num2] = getRandomNumbers(0, 100, 2);
  const result = getGcd(num1, num2);

  const numsStr = `${num1} ${num2}`;
  const correctAnswer = result.toString();

  return [numsStr, correctAnswer];
};

export default () => ['Find the greatest common divisor of given numbers.', getQuestionAndAnswer];