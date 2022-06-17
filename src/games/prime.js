import { game } from '../index.js';
import { getRandomNum } from '../utils.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return number >= 2;
};

export default () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getGameData = () => {
    const question = getRandomNum(100);
    const correctAnswer = (isPrime(question)) ? 'yes' : 'no'; 
    return [question, correctAnswer];
  };
  game(description, getGameData);
};
