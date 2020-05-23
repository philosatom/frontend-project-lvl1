const isEven = (num) => num % 2 === 0;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;

const getQA = () => {
  const num = getRandomNumber(0, 100);
  const correctAnswer = (isEven(num)) ? 'yes' : 'no';

  return [num, correctAnswer];
};

export default () => ['Answer "yes" if the number is even, otherwise answer "no".', getQA];
