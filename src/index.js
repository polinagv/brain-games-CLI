import readlineSync from 'readline-sync';

const MAX_ROUNDS = 3;

const play = (getGameData, gameTask) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameTask);

  for (let round = 0; round < MAX_ROUNDS; round += 1) {
    const [gameQuestion, gameCorrectAnswer] = getGameData();

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
