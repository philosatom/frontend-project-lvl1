#!/usr/bin/env node

import { getName, greet } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
greet(getName());
