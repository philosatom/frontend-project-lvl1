import { getRandomNumbers } from '../math.js';

const isEven = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const [num] = getRandomNumbers(0, 100, 1);
  const correctAnswer = (isEven(num)) ? 'yes' : 'no';

  return [num, correctAnswer];
};

export default () => ['Answer "yes" if the number is even, otherwise answer "no".', getQuestionAndAnswer];
