import inquirer from "inquirer";
const answer = await inquirer.prompt([]);
//1-compare will generate a random number
//2-user input for gguessing number
//3-compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to number guessing game");
const answers = await inquirer.prompt([
    {
        name: "User Guess Number",
        type: "number",
        message: "please guess a number between 1-6 :",
    },
]);
console.log(answers);
if (answers.userGuessNumber == randomNumber) {
    console.log("congratulations! you guessed right number");
}
else {
    console.log("you guessed wrong number");
}
