import { randomNumber, toPlay, MAX_ROUNDS } from '../index.js';

const toGenerateProgression = (changeFactor, progressionLength = 10) => {
  const firstNumber = randomNumber(1, 100);
  const arr = [firstNumber];

  while (arr.length < progressionLength) {
    const newNumber = arr[arr.length - 1] + changeFactor;
    arr.push(newNumber);
  }
  return arr;
};

const toPlayBrainProgression = (name) => {
  console.log('What number is missing in the progression?');

  let countOfCorrectAnswers = 0;

  while (countOfCorrectAnswers !== MAX_ROUNDS) {
    const changeFactor = randomNumber(-10, 10);
    const progressionLength = randomNumber(5, 15);
    const progression = toGenerateProgression(changeFactor, progressionLength);

    const numberToReplace = progression[randomNumber(0, progressionLength - 1)];
    const indexOfCorrectAnswer = progression.indexOf(numberToReplace);
    progression[indexOfCorrectAnswer] = '..';

    const question = progression.join(' ');
    const correctAnswer = numberToReplace.toString();
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

export default toPlayBrainProgression;
