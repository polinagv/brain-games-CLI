import { randomNumber, toPlay, MAX_ROUNDS } from '../index.js';

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

const toPlayBrainGcd = (name) => {
  console.log('Find the greatest common divisor of given numbers.');

  let countOfCorrectAnswers = 0;

  while (countOfCorrectAnswers !== MAX_ROUNDS) {
    const firstNumber = randomNumber(1, 100);
    const secondNumber = randomNumber(1, 100);

    const question = `${firstNumber} ${secondNumber}`;
    const correctAnswer = toFindGcd(firstNumber, secondNumber);
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

export default toPlayBrainGcd;
