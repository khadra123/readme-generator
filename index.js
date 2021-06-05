// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const licenses = require('./utils/licenses.js');

// TODO: Create an array of questions for user input
let licenses = 

inquirer

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your Project title?",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You need to enter a project title!');
                return false;
            }
        },
    },
    {
        type: "input",
        name: "description",
        message: "General description of your project:"
    validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to enter a project description!');
                return false;
            }
        },
    },
    {
        type: "input",
        name: "installation",
        message: "Give installation instructions:"
    },
    {
        type: "input",
        name: "credits",
        message: "Provide your project credits:"
    },
    {
        type: "input",
        name: "email",
        message: "Provide your Github username:"
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
