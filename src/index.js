import readlineSync from 'readline-sync';

export const game = (task, pair) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(task);

  let roundsCounter = 3;

  for (let i = 1; i <= roundsCounter; i += 1) {
    const [question, correctAnswer] = pair();

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
      } 
    console.log('Correct!');
    }
  console.log(`Congratulations, ${name}!`);
};
