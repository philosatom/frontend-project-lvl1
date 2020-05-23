import { getRandomNumber, calc } from '../src/math.js';

const getQA = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, 2);
  const operator = operators[randomIndex];

  const operands = [];
  for (let i = 0; i < 2; i += 1) {
    const num = getRandomNumber(0, 100);
    operands.push(num);
  }
  const [num1, num2] = operands;

  const expression = `${num1} ${operator} ${num2}`;
  const result = calc(num1, num2, operator);
  const correctAnswer = result.toString();

  return [expression, correctAnswer];
};

export default () => ['What is the result of the expression?', getQA];
