import { getRandomNumber } from '../utils.js';

const isEven = (number) => number % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const number = getRandomNumber(0, 100);

  const question = number.toString();
  const correctAnswer = (isEven(number)) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => [description, getQuestionAndAnswer];
