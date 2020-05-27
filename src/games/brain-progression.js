import { getRandomNumber, times } from '../utils.js';

const getProgression = (start, size, step) => {
  const progression = [];

  for (let i = 0; i < size; i += 1) {
    const currentNum = start + step * i;
    progression[i] = currentNum;
  }

  return progression;
};

const getQuestionAndAnswer = () => {
  const [start, step] = times(2, getRandomNumber, 0, 100);
  const progression = getProgression(start, 10, step);
  const randomIndex = getRandomNumber(0, 9);
  const hiddenNum = progression[randomIndex];

  progression[randomIndex] = '..';

  const modifiedProgression = progression.join(' ');
  const correctAnswer = hiddenNum.toString();

  return [modifiedProgression, correctAnswer];
};

export default () => ['What number is missing in the progression?', getQuestionAndAnswer];
