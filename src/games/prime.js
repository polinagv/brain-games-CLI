import { randomNumber, toPlay, MAX_ROUNDS } from '../index.js';

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const toPlayBrainPrime = (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let countOfCorrectAnswers = 0;

  while (countOfCorrectAnswers !== MAX_ROUNDS) {
    const question = randomNumber(1, 100);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
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

export default toPlayBrainPrime;
