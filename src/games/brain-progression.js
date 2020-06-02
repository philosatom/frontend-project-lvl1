import { getRandomNumber, times } from '../utils.js';

const getArithmeticProgression = (start, size, step) => {
  const progression = [];

  for (let index = 0; index < size; index += 1) {
    const currentMember = start + step * index;
    progression[index] = currentMember;
  }

  return progression;
};

const description = 'What number is missing in the progression?';

const progressionSize = 10;
const lastMemberIndex = progressionSize - 1;

const getQuestionAndAnswer = () => {
  const [firstMember, step] = times(2, getRandomNumber, 0, 100);
  const progression = getArithmeticProgression(firstMember, progressionSize, step);

  const hiddenMemberIndex = getRandomNumber(0, lastMemberIndex);
  const hiddenMember = progression[hiddenMemberIndex];

  progression[hiddenMemberIndex] = '..';

  const question = progression.join(' ');
  const correctAnswer = hiddenMember.toString();

  return [question, correctAnswer];
};

export default () => [description, getQuestionAndAnswer];
