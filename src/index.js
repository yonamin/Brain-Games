import readlineSync from 'readline-sync';

export function getRandomNum(min, max) {
  const a = Math.ceil(min);
  const b = Math.floor(max);
  return Math.floor(Math.random() * (a - b)) + b;
}

export const game = (task, pair) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(task);

  let result;
  let correctCounter = 0;

  do {
    const couple = pair();
    const question = couple[0];
    const correctAnswer = couple[1];

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      result = true;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      result = false;
    }
    if (result === true) {
      correctCounter += 1;
    }
  } while (result === true && correctCounter < 3);

  const message = (correctCounter === 3) ? `Congratulations, ${name}!` : `Let's try again, ${name}!`;
  console.log(message);
};
