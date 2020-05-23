import { isEven, getRandomNumber } from '../src/math.js';

const getQA = () => {
  const num = getRandomNumber(0, 100);
  const correctAnswer = (isEven(num)) ? 'yes' : 'no';

  return [num, correctAnswer];
};

export default () => ['Answer "yes" if the number is even, otherwise answer "no".', getQA];
