import readlineSync from 'readline-sync';

export function getRandomNum(min, max) {
  const a = Math.ceil(min);
  const b = Math.floor(max);
  return Math.floor(Math.random() * (a - b)) + b;
}

let name;
const greeting = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

const round = (question, correctAnswer) => {
  let result;
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
    result = true;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    result = false;
  }
  return result;
};

const finalMessage = (correctCounter) => {
  const message = (correctCounter === 3) ? `Congratulations, ${name}!` : `Let's try again, ${name}!`;
  console.log(message);
};

export const game = (task, pair) => {
  greeting();
  console.log(task);

  let result;
  let correctCounter = 0;

  do {
    const couple = pair();
    const quest = couple[0];
    const answer = couple[1];
    result = round(quest, answer);
    if (result === true) {
      correctCounter += 1;
    }
  } while (result === true && correctCounter < 3);

  finalMessage(correctCounter);
};
