import { getRandomNumber, times } from '../utils.js';

const getGcd = (number1, number2) => {
  let minNumber = Math.min(number1, number2);
  let maxNumber = Math.max(number1, number2);

  while (minNumber > 0) {
    const mod = maxNumber % minNumber;
    [minNumber, maxNumber] = [mod, minNumber];
  }

  return maxNumber;
};

const description = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const [number1, number2] = times(2, getRandomNumber, 0, 100);
  const gcd = getGcd(number1, number2);

  const question = `${number1} ${number2}`;
  const correctAnswer = gcd.toString();

  return [question, correctAnswer];
};

export default () => [description, getQuestionAndAnswer];
