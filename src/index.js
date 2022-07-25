import readlineSync from 'readline-sync';

export const randomNumber = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const MAX_ROUNDS = 3;

export const toPlay = (gameQuestion, gameCorrectAnswer, userName) => {
  console.log(`Question: ${gameQuestion}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === gameCorrectAnswer) {
    console.log('Correct!');
    return 'win';
  }

  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${gameCorrectAnswer}'.`);
  console.log(`Let's try again, ${userName}`);
  return 'lose';
};
