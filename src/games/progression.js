import {
  getRandomNum, game,
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
  const task = 'What number is missing in the progression?';

  const buildPair = () => {
    const step = getRandomNum(1, 5);
    const firstNum = getRandomNum(1, 100);
    const space = getRandomNum(0, 9);
    const question = progression(firstNum, step, space).join(' ');
    const correctAnswer = String(spacedNum);
    const pair = [question, correctAnswer];
    return pair;
  };
  game(task, buildPair);
};
