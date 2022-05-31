import {
  getRandomNum, game,
} from '../index.js';

const isEven = (num) => (num % 2 === 0);

export default () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  const buildPair = () => {
    const question = getRandomNum(1, 100);
    const correctAnswer = (isEven(question)) ? 'yes' : 'no';
    const pair = [question, correctAnswer];
    return pair;
  };
  game(task, buildPair);
};
