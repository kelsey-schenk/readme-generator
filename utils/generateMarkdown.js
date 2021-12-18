// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license, github, titleInput) {
  if(license === 'None') {
    return
  } else {
    return `<img src="https://img.shields.io/github/license/${github}/${titleInput}">`
  } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None'){
    return ``;
  } else {
    return `*[License](#license)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None') {
    return ``;
  } else {
    return `#License`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `
  ${renderLicenseBadge(data.license, data.github, data.title)}

  # Title
  ${data.title}

  ## Description
  ${data.description}

  # Table of Contents

  * [Instructions](#instructions)
  * [Usage](#usage)
  * [License](#license)
  * [Badges](#badges)
  * [Contributing](#contribution)
  * [Questions](#questions)
  * [Tests](#test)



  ## Installation
  ${data.instructions}

  ## Usage
  ${data.usage}

  ## Contribution Guidelines
  ${data.contribution}

  ## Tests
  ${data.test}
`;
}

module.exports = generateMarkdown;

// $(renderLicenseBadge);

// Rendering the badges, getting them to appear on the page
//  (just me) figure out why links aren't working