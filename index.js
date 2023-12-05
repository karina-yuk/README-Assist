// TODO: Include packages needed for this application

const inquirer = require("inquirer");

const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of the project?",
    name: "title",
  },
  {
    type: "input",
    message: "Enter in details a decription for your project!",
    name: "description",
  },
  {
    type: "input",
    message: "Enter any installation instructions for your project!",
    name: "installation",
  },
  {
    type: "input",
    message: "Enter instructions and examples on how to use this project?",
    name: "usage",
  },
  {
    type: "input",
    message: "Do you have collaborators or reference materials that you used in developing your project?",
    name: "contribution",
  },
  {
    type: "input",
    message: "What testing was done for your project?",
    name: "tests",
  },
  {
    type: "list",
    message: "Please choose a license for your project!",
    choices: ["MIT", "Apache", "MPL",],
    name: "license",
  },
  {
    type: "input",
    message: "What is your Github username?",
    name: "github_username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email_address",
  },
];

module.exports = {
  questions:questions,
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("sample.md", data, function (error){
    if (error) {
        console.log(error)
}

console.log("Successfully created readme file!")
  });
}

// TODO: Create a function to initialize app
async function init() {
  const info = await inquirer.prompt(questions);
  writeToFile("README", generateMarkdown(info));
  
}

// Function call to initialize app
init();
