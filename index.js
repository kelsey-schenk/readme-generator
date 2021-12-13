// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const generateReadme = require()

// TODO: Create an array of questions for user input
const readmeQuestions = readmeData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please enter the title of your project',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                    } else {
                    console.log('Please enter a title for your project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                    } else {
                    console.log('Please enter a description for your project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'Please write the installation instructions for your app here',
            validate: instructionsInput => {
                if (instructionsInput) {
                    return true;
                    } else {
                    console.log('Please enter instructions for your app');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter the usage information for your app here',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                    } else {
                    console.log('Please enter usage informtion');
                    return false;
                }

            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter contribution guidelines',
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                    } else {
                    console.log('Enter some contribution guidelines');
                    return false;
                }
            }         
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter test instructions for',
            validate: testInput => {
                if (testInput) {
                    return true;
                    } else {
                    console.log('Enter some test instructions');
                    return false;
                }
            }
        
        }

    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
readmeQuestions ();
