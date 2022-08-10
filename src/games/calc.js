import play from '../index.js';
import getRandomNumber from '../helpers.js';

const MATH_OPERATIONS = ['+', '-', '*'];
const toCalc = (one, two, oper) => {
  let correctAnswer = null;
  switch (oper) {
    case '+':
      correctAnswer = one + two;
      break;
    case '-':
      correctAnswer = one - two;
      break;
    case '*':
      correctAnswer = one * two;
      break;
    default:
      correctAnswer = 'error :(';
  }
  return correctAnswer.toString();
};

const task = 'What is the result of the expression?';

const playBrainCalc = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const operator = MATH_OPERATIONS[getRandomNumber(0, MATH_OPERATIONS.length - 1)];

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = toCalc(firstNumber, secondNumber, operator);

  return [question, correctAnswer];
};

export default () => play(playBrainCalc, task);
