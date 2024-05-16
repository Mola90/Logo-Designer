import inquirer from 'inquirer';

const questions = [
  {
    type: "input",
    name: "colour",
    message: "Please choose a logo colour:",
  }
];

inquirer.prompt(questions).then((answer) => {
  console.log("You chose the colour:", answer.colour);
}).catch((err) => {
  console.error("Error:", err);
});