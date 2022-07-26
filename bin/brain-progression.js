#!/usr/bin/env node
import userGreeting from '../src/cli.js';
import toPlayBrainProgession from '../src/games/progression.js';

console.log('Welcome to the Brain Games!');

const userName = userGreeting();

toPlayBrainProgession(userName);
