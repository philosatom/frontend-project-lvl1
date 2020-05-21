import getAnswer from './getAnswer.js';

const isEven = (num) => num % 2 === 0;
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;

export default (playerName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const num = getRandomNumber(0, 100);
    const correctAnswer = (isEven(num)) ? 'yes' : 'no';

    console.log(`Question: ${num}`);
    const playerAnswer = getAnswer('Your answer:');

    if (playerAnswer !== correctAnswer) {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${playerName}`);
};