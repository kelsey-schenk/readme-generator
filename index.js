// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateReadme = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const promptReadMe = () => {
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
            message: 'Enter test instructions for your project',
            validate: testInput => {
                if (testInput) {
                    return true;
                    } else {
                    console.log('Enter some test instructions');
                    return false;
                }
            }
        
        },
        // have them only choose one license 
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your project',
            choices: ['None', 'MIT', 'Apache', 'MPL'],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                    } else {
                    console.log('Please choose a license for your project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username ',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Enter your GitHub username');
                    return false;
                }
            }

        }

    ]).then(questionData => {
        // console.log(readmeData);
        return questionData;
    });
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
    // Write file needs two parameters, first is path, second is what we're putting into the file
const writeFile = (mD, response) => {
    return new Promise((resolve, reject) => {
    fs.writeFile('./dist/readme.md', mD, err => {
        if (err) {
        reject(err);
        return;
        }

        resolve({
        ok: true,
        message: 'File created!'
        });
    });
    });
};


// TODO: Create a function to initialize app
function init() {
    promptReadMe()
        .then(response => {
        // ReadMeMarkdown names the file, genrateReadme sends the data to the generateMarkdown util, ... (spread syntax) response looks into object
        // writeToFile('ReadMeMarkdown.md', generateReadme({...response}));
        let mD = generateReadme(response)
        return writeFile(mD, response);
        });
}

// Function call to initialize app
init ();
