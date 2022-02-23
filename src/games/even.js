import {
  greeting, getRandomNum, level, finalMessage,
} from '../index.js';

const isEven = (num) => ((num % 2 === 0) ? 'yes' : 'no');

export default () => {
  greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let result;
  let correctCounter = 0;
  do {
    const question = getRandomNum(1, 100);
    const correctAnswer = isEven(question);
    result = level(question, correctAnswer);
    if (result === 'true') {
      correctCounter += 1;
    }
  } while (result === 'true' && correctCounter < 3);

  finalMessage(correctCounter);
};
