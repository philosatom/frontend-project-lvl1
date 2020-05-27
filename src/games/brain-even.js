import getRandomNumber from '../getRandomNumber.js';

const isEven = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const num = getRandomNumber(0, 100);
  const correctAnswer = (isEven(num)) ? 'yes' : 'no';

  return [num, correctAnswer];
};

export default () => ['Answer "yes" if the number is even, otherwise answer "no".', getQuestionAndAnswer];
