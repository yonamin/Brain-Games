import {
  getRandomNum, game,
} from '../index.js';

export default () => {
  const task = 'What is the result of the expression?';

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

  const buildPair = () => {
    const firstNum = getRandomNum(1, 50);
    const secondNum = getRandomNum(1, 20);
    const operator = operators[getRandomNum(0, 3)];
    const question = `${firstNum} ${operator} ${secondNum}`;
    const correctAnswer = String(calculate(operator, firstNum, secondNum));
    const pair = [question, correctAnswer];
    return pair;
  };
  game(task, buildPair);
};
