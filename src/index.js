import readlineSync from 'readline-sync';
import userGreeting from './cli.js';

const MAX_ROUNDS = 3;

const play = (gameData, gameTask) => {
  console.log('Welcome to the Brain Games!');

  const userName = userGreeting();

  console.log(gameTask);

  for (let round = 0; round < MAX_ROUNDS; round += 1) {
    const [gameQuestion, gameCorrectAnswer] = gameData();

    console.log(`Question: ${gameQuestion}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== gameCorrectAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${gameCorrectAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default play;
