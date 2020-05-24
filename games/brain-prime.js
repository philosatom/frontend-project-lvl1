import { getRandomNumbers, isPrime } from '../src/math.js';

const getQA = () => {
  const [num] = getRandomNumbers(0, 100, 1);
  const correctAnswer = (isPrime(num)) ? 'yes' : 'no';

  return [num, correctAnswer];
};

export default () => ['Answer "yes" if given number is prime. Otherwise answer "no".', getQA];
