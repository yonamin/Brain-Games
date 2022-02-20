import readlineSync from 'readline-sync';

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

const isEven = (num) => ((num % 2 === 0) ? 'yes' : 'no');

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let counter = 0;
  for (let questionsCount = 1; questionsCount <= 3; questionsCount += 1) {
    const number = getRandomNumber(100);
    const correctAnswer = isEven(number);

    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      break;
    }
  }

  const finalMessage = (counter === 3) ? `Congratulations, ${name}!` : `Let's try again, ${name}!`;

  console.log(finalMessage);
};
