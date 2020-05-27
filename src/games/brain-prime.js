import { getRandomNumbers } from '../math.js';

const isPrime = (num) => {
  const sqrt = Math.sqrt(num);

  if (num % sqrt === 0 || isEven(num)) return false;

  for (let d = 3; d < sqrt; d += 2) {
    if (sqrt % d === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const [num] = getRandomNumbers(0, 300, 1);
  const correctAnswer = (isPrime(num)) ? 'yes' : 'no';

  return [num, correctAnswer];
};

export default () => ['Answer "yes" if given number is prime. Otherwise answer "no".', getQuestionAndAnswer];
