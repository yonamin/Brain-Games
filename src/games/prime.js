import {
  getRandomNum, game,
} from '../index.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return number >= 2;
};

export default () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const buildPair = () => {
    const question = getRandomNum(1, 100);
    const correctAnswer = (isPrime(question)) ? 'yes' : 'no';
    const pair = [question, correctAnswer];
    return pair;
  };
  game(task, buildPair);
};
