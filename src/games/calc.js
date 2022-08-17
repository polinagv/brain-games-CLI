import play from '../index.js';
import getRandomNumber from '../helpers.js';

const MATH_OPERATIONS = ['+', '-', '*'];
const calc = (first, second, operator) => {
  let correctAnswer = null;
  switch (operator) {
    case '+':
      correctAnswer = first + second;
      break;
    case '-':
      correctAnswer = first - second;
      break;
    case '*':
      correctAnswer = first * second;
      break;
    default:
      correctAnswer = 'error :(';
  }
  return correctAnswer;
};

const task = 'What is the result of the expression?';

const playBrainCalc = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const operator = MATH_OPERATIONS[getRandomNumber(0, MATH_OPERATIONS.length - 1)];

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = calc(firstNumber, secondNumber, operator).toString();

  return [question, correctAnswer];
};

export default () => play(playBrainCalc, task);
