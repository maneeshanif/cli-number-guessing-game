#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let randomNumber = Math.floor(Math.random() * 10 + 1);
let attemps = 0;
console.log(chalk.cyanBright.bgWhiteBright("you have 5 attemps to guessed the number"));
do {
    attemps++;
    let answer = await inquirer.prompt([
        {
            name: "userGuessedNumber",
            type: "number",
            message: chalk.bgBlueBright.bold(`Please guess a number between 1 and 10 attemps ${attemps}`),
        },
    ]);
    if (answer.userGuessedNumber === randomNumber) {
        console.log(chalk.yellowBright.bgGreenBright.italic("Congratulations! You guessed the right number"));
        console.log(chalk.redBright.bgYellowBright.italic(`You nailed it on the  ${attemps} try!`));
        break;
    }
    else {
        console.log(chalk.blue.bgRedBright.strikethrough `You guessed wrong.`);
    }
} while (attemps < 5);
console.log(chalk.redBright.bgCyan.dim.inverse("the right number is ", randomNumber));
