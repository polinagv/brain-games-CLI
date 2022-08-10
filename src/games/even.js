import play from '../index.js';
import getRandomNumber from '../helpers.js';

const isEven = (num) => num % 2 === 0;
const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const playBrainEven = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => play(playBrainEven, task);
