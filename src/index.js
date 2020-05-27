import readlineSync from 'readline-sync';

export default (game) => {
  const [rules, getQuestionAndAnswer] = game();

  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  console.log(rules);

  for (let i = 0; i < 3; i += 1) {
    const [questionText, correctAnswer] = getQuestionAndAnswer();

    console.log(`Question: ${questionText}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer !== correctAnswer) {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${playerName}!`);
};
