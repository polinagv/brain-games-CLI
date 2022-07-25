import { randomNumber, toPlay, MAX_ROUNDS } from '../index.js';

const isEven = (num) => num % 2 === 0;

const toPlayBrainEven = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let countOfCorrectAnswers = 0;

  while (countOfCorrectAnswers !== MAX_ROUNDS) {
    const question = randomNumber(1, 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
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

export default toPlayBrainEven;
