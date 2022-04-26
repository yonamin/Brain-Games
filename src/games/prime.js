import {
  getRandomNum, game,
} from '../index.js';

const isPrime = (number) => {
  let result = 'yes';
  if (number === 1) {
    result = 'no';
  }
  const half = Math.floor(number / 2);
  for (let i = half; i > 1; i -= 1) {
    if (number % i === 0) {
      result = 'no';
    }
  }
  return result;
};

export default () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const buildPair = () => {
    const question = getRandomNum(1, 100);
    const correctAnswer = isPrime(question);
    const pair = [question, correctAnswer];
    return pair;
  }
  game(task, buildPair);
};
