#!/usr/bin/env node
import userGreeting from '../src/cli.js';
import toPlayBrainPrime from '../src/games/prime.js';

console.log('Welcome to the Brain Games!');

const userName = userGreeting();

toPlayBrainPrime(userName);
