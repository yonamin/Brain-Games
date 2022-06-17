import { game } from '../index.js';
import { getRandomNum } from '../utils.js';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];
const calculate = (oper, x, y) => {
  switch (oper) {
    case '+':
      return (x + y);
    case '-':
      return (x - y);
    case '*':
      return (x * y);
    default:
      return null;
  }
};

export default () => {
  const getGameData = () => {
    const firstNum = getRandomNum(50);
    const secondNum = getRandomNum(20);
    const operator = operators[getRandomNum(3, 0)];
    const question = `${firstNum} ${operator} ${secondNum}`;
    const correctAnswer = String(calculate(operator, firstNum, secondNum));
    return [question, correctAnswer];
  };
  game(description, getGameData);
};
