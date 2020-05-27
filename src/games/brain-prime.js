import getRandomNumber from '../getRandomNumber.js';

const isPrime = (num) => {
  const sqrt = Math.sqrt(num);

  if (num % sqrt === 0 || num % 2 === 0) return false;

  for (let d = 3; d < sqrt; d += 2) {
    if (num % d === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const num = getRandomNumber(0, 300);
  const correctAnswer = (isPrime(num)) ? 'yes' : 'no';

  return [num, correctAnswer];
};

export default () => ['Answer "yes" if given number is prime. Otherwise answer "no".', getQuestionAndAnswer];
