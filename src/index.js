import readlineSync from 'readline-sync';
import userGreeting from './cli.js';

const MAX_ROUNDS = 3;

export const toPlay = (gameData, gameTask) => {
  console.log('Welcome to the Brain Games!');

  const userName = userGreeting();

  console.log(gameTask);

  let countOfCorrectAnswers = 0;

  while (countOfCorrectAnswers !== MAX_ROUNDS) {
    const gameParams = gameData();
    const question = gameParams[0];
    const correctAnswer = gameParams[1];

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
      countOfCorrectAnswers += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log(`Congratulations, ${userName}!`);
  }
};
