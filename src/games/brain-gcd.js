import { getRandomNumbers, getGcd } from '../math.js';

const getQuestionAndAnswer = () => {
  const [num1, num2] = getRandomNumbers(0, 100, 2);
  const result = getGcd(num1, num2);

  const numsStr = `${num1} ${num2}`;
  const correctAnswer = result.toString();

  return [numsStr, correctAnswer];
};

export default () => ['Find the greatest common divisor of given numbers.', getQuestionAndAnswer];
