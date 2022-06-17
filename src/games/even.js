import { game } from '../index.js';
import { getRandomNum } from '../utils.js';

const isEven = (num) => (num % 2 === 0);

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getGameData = () => {
    const question = getRandomNum(100);
    const correctAnswer = (isEven(question)) ? 'yes' : 'no';
    return [question, correctAnswer];
  };
  game(description, getGameData);
};
