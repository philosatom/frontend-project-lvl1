import { getRandomNumbers, isPrime } from '../math.js';

const getQuestionAndAnswer = () => {
  const [num] = getRandomNumbers(0, 300, 1);
  const correctAnswer = (isPrime(num)) ? 'yes' : 'no';

  return [num, correctAnswer];
};

export default () => ['Answer "yes" if given number is prime. Otherwise answer "no".', getQuestionAndAnswer];
