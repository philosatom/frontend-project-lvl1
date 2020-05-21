#!/usr/bin/env node

import { getAnswer, greet } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
greet(getAnswer('May I have your name?'));
