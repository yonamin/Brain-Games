import {
  getRandomNum, game,
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
  const task = 'Find the greatest common divisor of given numbers.';

  const buildPair = () => {
    const firstNum = getRandomNum(1, 100);
    const secondNum = getRandomNum(1, 100);
    const question = `${firstNum} ${secondNum}`;
    const correctAnswer = String(gcdCalc(firstNum, secondNum));
    const pair = [question, correctAnswer];
    return pair;
  }
  game(task, buildPair);
};
