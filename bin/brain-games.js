#!/usr/bin/env node

import getAnswer from '../src/getAnswer.js';
import greet from '../src/greet.js';

console.log('Welcome to the Brain Games!');
greet(getAnswer('May I have your name?'));
