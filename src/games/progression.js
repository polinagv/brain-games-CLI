import play from '../index.js';
import getRandomNumber from '../helpers.js';

const generateProgression = (firstNumber, changeFactor, progressionLength = 10) => {
  const arr = [firstNumber];

  while (arr.length < progressionLength) {
    const newNumber = arr[arr.length - 1] + changeFactor;
    arr.push(newNumber);
  }
  return arr;
};

const task = 'What number is missing in the progression?';

const playBrainProgression = () => {
  const firstNumber = getRandomNumber(1, 100);
  const changeFactor = getRandomNumber(-10, 10);
  const progressionLength = getRandomNumber(5, 15);
  const progression = generateProgression(firstNumber, changeFactor, progressionLength);

  const numberToReplace = progression[getRandomNumber(0, progressionLength - 1)];
  const indexOfCorrectAnswer = progression.indexOf(numberToReplace);
  progression[indexOfCorrectAnswer] = '..';

  const question = progression.join(' ');
  const correctAnswer = numberToReplace.toString();

  return [question, correctAnswer];
};

export default () => play(playBrainProgression, task);
