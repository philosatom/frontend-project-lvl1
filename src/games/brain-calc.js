import getRandomNumber from '../getRandomNumber.js';
import times from '../times.js';

const calc = (operand1, operand2, operator) => {
  let result = null;

  if (operator === '+') {
    result = operand1 + operand2;
  } else if (operator === '-') {
    result = operand1 - operand2;
  } else if (operator === '*') {
    result = operand1 * operand2;
  }

  return result;
};

const getQuestionAndAnswer = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, 2);
  const operator = operators[randomIndex];
  const [num1, num2] = times(2, getRandomNumber, 0, 100);

  console.log('Проверка', num1, num2);

  const result = calc(num1, num2, operator);

  const expression = `${num1} ${operator} ${num2}`;
  const correctAnswer = result.toString();

  return [expression, correctAnswer];
};

export default () => ['What is the result of the expression?', getQuestionAndAnswer];
