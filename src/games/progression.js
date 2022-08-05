import toPlay from '../index.js';
import randomNumber from '../helpers.js';

const toGenerateProgression = (changeFactor, progressionLength = 10) => {
  const firstNumber = randomNumber(1, 100);
  const arr = [firstNumber];

  while (arr.length < progressionLength) {
    const newNumber = arr[arr.length - 1] + changeFactor;
    arr.push(newNumber);
  }
  return arr;
};

const task = 'What number is missing in the progression?';

const toPlayBrainProgression = () => {
  const changeFactor = randomNumber(-10, 10);
  const progressionLength = randomNumber(5, 15);
  const progression = toGenerateProgression(changeFactor, progressionLength);

  const numberToReplace = progression[randomNumber(0, progressionLength - 1)];
  const indexOfCorrectAnswer = progression.indexOf(numberToReplace);
  progression[indexOfCorrectAnswer] = '..';

  const question = progression.join(' ');
  const correctAnswer = numberToReplace.toString();

  return [question, correctAnswer];
};

export default () => toPlay(toPlayBrainProgression, task);
