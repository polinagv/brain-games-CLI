#!/usr/bin/env node
import userGreeting from '../src/cli.js';
import toPlayBrainEven from '../src/games/even.js';

console.log('Welcome to the Brain Games!');

const userName = userGreeting();

toPlayBrainEven(userName);
