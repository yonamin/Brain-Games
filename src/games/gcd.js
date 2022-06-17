import game from '../index.js';
import getRandomNum from '../utils.js';

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
  const description = 'Find the greatest common divisor of given numbers.';

  const getGameData = () => {
    const firstNum = getRandomNum(100);
    const secondNum = getRandomNum(100);
    const question = `${firstNum} ${secondNum}`;
    const correctAnswer = String(gcdCalc(firstNum, secondNum));
    return [question, correctAnswer];
  };
  game(description, getGameData);
};
