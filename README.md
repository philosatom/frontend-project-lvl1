This repository is created for educational purposes.

# frontend-project-lvl1

[![Maintainability](https://api.codeclimate.com/v1/badges/37b48dd73462c321d12c/maintainability)](https://codeclimate.com/github/philosatom/frontend-project-lvl1/maintainability) 
[![Node CI](https://github.com/philosatom/frontend-project-lvl1/workflows/Node%20CI/badge.svg)](https://github.com/philosatom/frontend-project-lvl1/actions)

## Setup
```sh
$ make install
```

## Version history

### 1.0.0 (latest)
Removed **brain-games** bin.  
Now you don't get welcome and greeting messages, when you type **brain-games** in your console.  

Rewrited the game engine so that now you should give the game function as an input for the engine, not the result of the game function.

Removed **getAnswer**, **greet** and **math** modules.  

Created a common **utils** module with the following functions available for developers:
* **getRandomNumber**:
  * generates one random number from **min** to **max**
* **times**:
  * invokes the **iteratee** with given arguments (**args**) **n** times
  * returns an array of the results of each invocation  

  It works quite like [_.times](https://lodash.com/docs/4.17.15#times) from [lodash](https://lodash.com/), but invokes the iteratee with multiple arguments.

Fixed config files.

### 0.7.0
Created **brain-prime** cli game with the following rules:
* The game shows you a random number
* Answer "yes" if given number is prime, otherwise answer "no"
* Give three correct answers in a row to win the game

Install the package and type **brain-prime**.

[![asciicast](https://asciinema.org/a/333455.svg)](https://asciinema.org/a/333455)

### 0.6.0
Created **brain-progression** cli game with the following rules:
* The game shows you a progression of 10 elements with one number missed
* Find out what number is missing in the progression
* Give three correct answers in a row to win the game

Install the package and type **brain-progression**.

[![asciicast](https://asciinema.org/a/333406.svg)](https://asciinema.org/a/333406)

### 0.5.0
Created **brain-gcd** cli game with the following rules:
* The game shows you two random numbers
* Find the greatest common divisor of given numbers
* Give three correct answers in a row to win the game

Install the package and type **brain-gcd**.

[![asciicast](https://asciinema.org/a/333365.svg)](https://asciinema.org/a/333365)

### 0.4.0
Created a game engine, so anyone can use it to build own three-steps question-answer brain game.  

Rewrote **brain-even** game so that now it is based on the new engine.  

Created **brain-calc** cli game with the following rules:
* The game shows you an expression
* Write the result of the expression
* Give three correct answers in a row to win the game

Install the package and type **brain-calc**.  

[![asciicast](https://asciinema.org/a/333180.svg)](https://asciinema.org/a/333180)

### 0.3.0
Created **brain-even** cli game with simple rules:
* The game shows you a random number
* Answer "yes" if the number is even, otherwise answer "no"
* Give three correct answers in a row to win the game

Install the package and type **brain-even**.  
It will welcome you, ask your name and greet you. Then you can play the game.

[![asciicast](https://asciinema.org/a/333122.svg)](https://asciinema.org/a/333122)

### 0.2.0
Added greeting to **brain-games**

### 0.1.0
Created **brain-games** that welcomes you to the Brain Games  
Install the package and type **brain-games**.