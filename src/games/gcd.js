import play from '../index.js';
import getRandomNumber from '../helpers.js';

const FindGcd = (first, second) => {
  let a = Math.max(first, second);
  let b = Math.min(first, second);
  let result = b;

  while (a % b !== 0) {
    result = a % b;
    a = b;
    b = result;
  }
  return result;
};

const task = 'Find the greatest common divisor of given numbers.';

const playBrainGcd = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);

  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = FindGcd(firstNumber, secondNumber).toString();

  return [question, correctAnswer];
};

export default () => play(playBrainGcd, task);
