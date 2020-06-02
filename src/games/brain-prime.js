import { getRandomNumber } from '../utils.js';

const isPrime = (number) => {
  if (number <= 1) return false;
  if (number % 2 === 0) return false;

  const maxDivider = Math.sqrt(number);

  for (let divider = 3; divider <= maxDivider; divider += 2) {
    if (number % divider === 0) {
      return false;
    }
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const number = getRandomNumber(0, 300);

  const question = number.toString();
  const correctAnswer = (isPrime(number)) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => [description, getQuestionAndAnswer];
