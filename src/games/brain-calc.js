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

const operators = ['+', '-', '*'];
const lastOperatorIndex = operators.length - 1;
const getRandomOperator = () => {
  const operatorIndex = getRandomNumber(0, lastOperatorIndex);
  const operator = operators[operatorIndex];

  return operator;
};

const description = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const operator = getRandomOperator();
  const [operand1, operand2] = times(2, getRandomNumber, 0, 100);
  const result = calculate(operand1, operand2, operator);

  const question = `${operand1} ${operator} ${operand2}`;
  const correctAnswer = result.toString();

  return [question, correctAnswer];
};

export default () => [description, getQuestionAndAnswer];
