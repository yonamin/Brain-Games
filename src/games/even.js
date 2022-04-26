import {
  getRandomNum, game,
} from '../index.js';

const isEven = (num) => ((num % 2 === 0) ? 'yes' : 'no');

export default () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  // здесь должна быть функция генерации пары вопрос-ответ
  // а не просто сгенерированные один раз
  const buildPair = () => {
    const question = getRandomNum(1, 100);
    const correctAnswer = isEven(question);
    const pair = [question, correctAnswer];
    return pair;
  };
  game(task, buildPair);
};
