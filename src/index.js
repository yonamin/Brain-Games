import readlineSync from 'readline-sync';

export function getRandomNum(min, max) {
  const a = Math.ceil(min);
  const b = Math.floor(max);
  return Math.floor(Math.random() * (a - b)) + b;
}

let name;
export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export const level = (question, correctAnswer) => {
  let result;
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
    result = 'true';
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    result = 'false';
  }
  return result;
};

export const finalMessage = (correctCounter) => {
  const message = (correctCounter === 3) ? `Congratulations, ${name}!` : `Let's try again, ${name}!`;
  console.log(message);
};
