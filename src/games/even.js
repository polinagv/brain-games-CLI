import toPlay from '../index.js';
import randomNumber from '../helpers.js';

const isEven = (num) => num % 2 === 0;
const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const toPlayBrainEven = () => {
  const question = randomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => toPlay(toPlayBrainEven, task);
