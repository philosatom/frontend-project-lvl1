import { getRandomNumber, times } from '../utils.js';

const calculate = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      return null;
  }
};

const getQuestionAndAnswer = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, 2);
  const operator = operators[randomIndex];
  const [num1, num2] = times(2, getRandomNumber, 0, 100);
  const result = calculate(num1, num2, operator);

  const expression = `${num1} ${operator} ${num2}`;
  const correctAnswer = result.toString();

  return [expression, correctAnswer];
};

export default () => ['What is the result of the expression?', getQuestionAndAnswer];
