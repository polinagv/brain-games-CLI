import play from '../index.js';
import getRandomNumber from '../helpers.js';

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const playBrainPrime = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => play(playBrainPrime, task);
