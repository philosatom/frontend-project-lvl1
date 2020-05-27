import { getRandomNumbers, getProgression } from '../math.js';

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
