#!/usr/bin/env node

import getAnswer from '../src/getAnswer.js';
import greet from '../src/greet.js';
import playBrainEven from '../src/playBrainEven.js';

console.log('Welcome to the Brain Games!');

const userName = getAnswer('May I have your name?');

greet(userName);
playBrainEven(userName);
