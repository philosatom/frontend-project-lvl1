import { getRandomNumber, times } from '../utils.js';

const getArithmeticProgression = (start, size, step) => {
  const progression = [];

  for (let termIndex = 0; termIndex < size; termIndex += 1) {
    const currentNumber = start + step * termIndex;
    progression[termIndex] = currentNumber;
  }

  return progression;
};

const description = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const [firstTerm, step] = times(2, getRandomNumber, 0, 100);
  const progressionSize = 10;
  const progression = getArithmeticProgression(firstTerm, progressionSize, step);

  const lastTermIndex = progressionSize - 1;
  const termIndex = getRandomNumber(0, lastTermIndex);
  const hiddenNum = progression[termIndex];

  progression[termIndex] = '..';

  const modifiedProgression = progression.join(' ');
  const correctAnswer = hiddenNum.toString();

  return [modifiedProgression, correctAnswer];
};

export default () => [description, getQuestionAndAnswer];
