// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { resolve } = require('path');
const generateReadme = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input

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
        message: "General description of your project:",
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
        message: "Give installation instructions:",
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('You need to enter installation instructions!');
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: "Enter Github username!",
        //validate property check
        validate: (value) => {
            if (value) {
                return true;
            } else {
                console.log('Please your Github username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter your email address!",
        //validate property check
        validate: (value) => {
            if (value) {
                return true;
            } else {
                console.log('Please your email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: "Enter project usage information",
        validate: (value) => {
            if (value) {
                return true;
            } else {
                console.log('Please enter project usage information!');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you make this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
        type: 'list',
        name: 'license',
        message: 'What licenses did you use for this project with? (Check all that apply)',
        choices: ['MIT', 'Boost', 'Apache', 'GNU', 'Creative Commons', 'Eclipes', 'ISC', 'Mozilla Public License 2.0', 'Unlicense'],
        validate: (value) => {
            if (value) {
                return true;
            } else {
                console.log('Please choose a license type!');
                return false;
            }
        }
    },

];


// TODO: Create a function to write README file
function writeFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/readme.md', data, err=> {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok:true,
                message:'ReadMe created!'
            });
        });
    });
};

    // TODO: Create a function to initialize app
    function init() {
        inquirer.prompt([...questions])
            .then(
                answers => {
                    //Return user feedback
                    return generateReadme(answers);
                })
            .then(generateReadme => {
                return writeFile(generateReadme);
            })
            .catch(err => {
                console.log(err);
            })
    };

    // Function call to initialize app
    init();
