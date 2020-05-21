#!/usr/bin/env node

import { getAnswer, greet, playBrainEven } from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const userName = getAnswer('May I have your name?');

greet(userName);
playBrainEven(userName);
