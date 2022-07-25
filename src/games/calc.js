import { randomNumber, toPlay, MAX_ROUNDS } from '../index.js';

const MATH_OPERATIONS = ['+', '-', '*'];
const toComputeCorrectAnswerCalc = (one, two, oper) => {
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

const toPlayBrainCalc = (name) => {
  console.log('What is the result of the expression?');

  let countOfCorrectAnswers = 0;

  while (countOfCorrectAnswers !== MAX_ROUNDS) {
    const firstNumber = randomNumber(1, 100);
    const secondNumber = randomNumber(1, 100);
    const operator = MATH_OPERATIONS[randomNumber(0, 2)];

    const question = `${firstNumber} ${operator} ${secondNumber}`;
    const correctAnswer = toComputeCorrectAnswerCalc(firstNumber, secondNumber, operator);
    const result = toPlay(question, correctAnswer, name);

    if (result === 'win') {
      countOfCorrectAnswers += 1;
    } else if (result === 'lose') {
      return;
    }
  }

  if (countOfCorrectAnswers === MAX_ROUNDS) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default toPlayBrainCalc;
