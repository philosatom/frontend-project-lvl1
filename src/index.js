import getAnswer from './getAnswer.js';
import greetPlayer from './greet.js';

const showFinalMessage = (isWinner, name) => {
  const message = (isWinner) ? 'Congratulations' : 'Let\'s try again';
  const finalMessage = `${message}, ${name}!`;

  console.log(`${finalMessage}`);
};

export default ([rules, getQA]) => {
  console.log('Welcome to the Brain Games!');

  const playerName = getAnswer('May I have your name?');
  greetPlayer(playerName);

  console.log(rules);
  let isWinner = true;

  for (let i = 0; i < 3; i += 1) {
    const [questionText, correctAnswer] = getQA();

    console.log(`Question: ${questionText}`);
    const playerAnswer = getAnswer('Your answer:');

    if (playerAnswer !== correctAnswer) {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      isWinner = false;
      break;
    }
    console.log('Correct!');
  }

  showFinalMessage(isWinner, playerName);
};
