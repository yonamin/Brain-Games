import {
  greeting, getRandomNum, level, finalMessage,
} from '../index.js';

const gcdCalc = (first, second) => {
  let a = first;
  let b = second;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return (a + b);
};

export default () => {
  greeting();
  console.log('Find the greatest common divisor of given numbers.');

  let result;
  let correctCounter = 0;
  do {
    const firstNum = getRandomNum(1, 100);
    const secondNum = getRandomNum(1, 100);
    const question = `${firstNum} ${secondNum}`;
    const correctAnswer = String(gcdCalc(firstNum, secondNum));
    result = level(question, correctAnswer);
    if (result === 'true') {
      correctCounter += 1;
    }
  } while (result === 'true' && correctCounter < 3);
  finalMessage(correctCounter);
};
