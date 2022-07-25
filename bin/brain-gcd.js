#!/usr/bin/env node
import userGreeting from '../src/cli.js';
import toPlayBrainGcd from '../src/games/gcd.js';

console.log('Welcome to the Brain Games!');

const userName = userGreeting();

toPlayBrainGcd(userName);
