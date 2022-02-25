import {
  greeting, getRandomNum, level, finalMessage,
} from '../index.js';

const isPrime = (number) => {
  let result = 'yes';
  const half = Math.floor(number / 2);
  for (let i = half; i > 1; i -= 1) {
    if (number % i === 0) {
      result = 'no';
    }
  }
  return result;
};

export default () => {
  greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let result;
  let correctCounter = 0;

  do {
    const question = getRandomNum(1, 100);
    const correctAnswer = isPrime(question);
    result = level(question, correctAnswer);
    if (result === 'true') {
      correctCounter += 1;
    }
  } while (result === 'true' && correctCounter < 3);

  finalMessage(correctCounter);
};
