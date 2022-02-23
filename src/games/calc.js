import {
  greeting, getRandomNum, level, finalMessage,
} from '../index.js';

export default () => {
  greeting();
  console.log('What is the result of the expression?');

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

  let result;
  let correctCounter = 0;
  do {
    const firstNum = getRandomNum(1, 50);
    const secondNum = getRandomNum(1, 20);
    const operator = operators[getRandomNum(0, 3)];
    const question = `${firstNum} ${operator} ${secondNum}`;
    const correctAnswer = String(calculate(operator, firstNum, secondNum));
    result = level(question, correctAnswer);
    if (result === 'true') {
      correctCounter += 1;
    }
  } while (result === 'true' && correctCounter < 3);

  finalMessage(correctCounter);
};
