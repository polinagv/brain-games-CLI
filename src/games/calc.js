import toPlay from '../index.js';
import randomNumber from '../helpers.js';

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
  }
  return correctAnswer.toString();
};

const task = 'What is the result of the expression?';

const toPlayBrainCalc = () => {
  const firstNumber = randomNumber(1, 100);
  const secondNumber = randomNumber(1, 100);
  const operator = MATH_OPERATIONS[randomNumber(0, 2)];

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = toCalc(firstNumber, secondNumber, operator);

  return [question, correctAnswer];
};

export default () => toPlay(toPlayBrainCalc, task);
