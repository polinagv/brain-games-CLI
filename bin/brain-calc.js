#!/usr/bin/env node
import userGreeting from '../src/cli.js';
import toPlayBrainCalc from '../src/games/calc.js';

console.log('Welcome to the Brain Games!');

const userName = userGreeting();

toPlayBrainCalc(userName);
