import { getRandomNumbers } from '../math.js';

const getProgression = (start, size, step) => {
  const progression = [];

  for (let i = 0; i < size; i += 1) {
    const currentNum = start + step * i;
    progression.push(currentNum);
  }

  return progression;
};

const getQuestionAndAnswer = () => {
  const [start, step] = getRandomNumbers(0, 100, 2);
  const [randomIndex] = getRandomNumbers(0, 9, 1);
  const progression = getProgression(start, 10, step);
  const hiddenNum = progression[randomIndex];

  progression[randomIndex] = '..';

  const modifiedProgression = progression.join(' ');
  const correctAnswer = hiddenNum.toString();

  return [modifiedProgression, correctAnswer];
};

export default () => ['What number is missing in the progression?', getQuestionAndAnswer];
