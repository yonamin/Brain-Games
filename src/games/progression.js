import game from '../index.js';
import getRandomNum from '../utils.js';

const getProgression = (firstNum, step, space) => {
  let spacedNum = 0;
  const progression = [firstNum];
  let currentNum = firstNum;
  for (let i = 0; i < 10; i += 1) {
    currentNum += step;
    if (i !== space) {
      progression.push(currentNum);
    } else {
      progression.push('..');
      spacedNum = currentNum;
    }
  }
  return [progression, spacedNum];
};

export default () => {
  const description = 'What number is missing in the progression?';

  const getGameData = () => {
    const step = getRandomNum(5);
    const firstNum = getRandomNum(100);
    const space = getRandomNum(9, 0);
    const task = getProgression(firstNum, step, space);
    const question = task[0].join(' ');
    const correctAnswer = String(task[1]);
    return [question, correctAnswer];
  };
  game(description, getGameData);
};
