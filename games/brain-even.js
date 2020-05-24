import { isEven, getRandomNumbers } from '../src/math.js';

const getQA = () => {
  const [num] = getRandomNumbers(0, 100, 1);
  const correctAnswer = (isEven(num)) ? 'yes' : 'no';

  return [num, correctAnswer];
};

export default () => ['Answer "yes" if the number is even, otherwise answer "no".', getQA];
