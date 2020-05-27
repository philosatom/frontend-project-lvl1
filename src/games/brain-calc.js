import { getRandomNumbers, calc } from '../math.js';

const getQuestionAndAnswer = () => {
  const operators = ['+', '-', '*'];
  const [randomIndex] = getRandomNumbers(0, 2, 1);
  const operator = operators[randomIndex];
  const [num1, num2] = getRandomNumbers(0, 100, 2);
  const result = calc(num1, num2, operator);

  const expression = `${num1} ${operator} ${num2}`;
  const correctAnswer = result.toString();

  return [expression, correctAnswer];
};

export default () => ['What is the result of the expression?', getQuestionAndAnswer];
