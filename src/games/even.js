import readlineSync from 'readline-sync';

const randomNumber = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const isEven = (num) => num % 2 === 0;

const toPlayBrainEven = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let countOfCorrectAnswers = 0;

  while (countOfCorrectAnswers !== 3) {
    const questionNumber = randomNumber(1, 100);
    console.log(`Question: ${questionNumber}`);
    const answer = readlineSync.question('Your answer: ');

    const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
      countOfCorrectAnswers += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }

  if (countOfCorrectAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default toPlayBrainEven;
