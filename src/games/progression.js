import {
  greeting, getRandomNum, level, finalMessage,
} from '../index.js';

let spacedNum = 0;
const progression = (firstNum, step, space) => {
  const prog = [firstNum];
  let currentNum = firstNum;
  for (let i = 0; i < 10; i += 1) {
    currentNum += step;
    if (i !== space) {
      prog.push(currentNum);
    } else {
      prog.push('..');
      spacedNum = currentNum;
    }
  }
  return prog;
};

export default () => {
  greeting();
  console.log('What number is missing in the progression?');

  let result;
  let correctCounter = 0;
  do {
    const step = getRandomNum(1, 5);
    const firstNum = getRandomNum(1, 100);
    const space = getRandomNum(0, 9);
    const question = progression(firstNum, step, space).join(' ');
    const correctAnswer = String(spacedNum);
    result = level(question, correctAnswer);
    if (result === 'true') {
      correctCounter += 1;
    }
  } while (result === 'true' && correctCounter < 3);

  finalMessage(correctCounter);
};
