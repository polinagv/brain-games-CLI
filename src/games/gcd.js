import toPlay from '../index.js';
import randomNumber from '../helpers.js';

const toFindGcd = (first, second) => {
  let a = Math.max(first, second);
  let b = Math.min(first, second);
  let result;

  while (a % b !== 0) {
    result = a % b;
    a = b;
    b = result;
  }
  return result.toString();
};

const task = 'Find the greatest common divisor of given numbers.';

const toPlayBrainGcd = () => {
  const firstNumber = randomNumber(1, 100);
  const secondNumber = randomNumber(1, 100);

  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = toFindGcd(firstNumber, secondNumber);

  return [question, correctAnswer];
};

export default () => toPlay(toPlayBrainGcd, task);
