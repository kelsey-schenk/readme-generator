// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {
  if(license[0] === 'None'){
    return ''
  }
  if(license[0] === 'MIT') {
    return '<img src="https://img.shields.io/github/license/kelsey-schenk/run-buddy?color=pink&label=MIT">'
  }
  if(license[0] === 'Apache') {
    return '<img src="https://img.shields.io/github/license/kelsey-schenk/run-buddy?color=pink&label=Apache">'
  }
  if(license[0] === 'MPL') {
    return '<img src="https://img.shields.io/github/license/kelsey-schenk/run-buddy?color=pink&label=MPL">'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `
  # ${data[0].title}
  ## ${data[0].description}
  ## ${data[0].instructions}
  ## ${data[0].usage}
  ## ${data[0].contribution}
  ## ${data[0].test}
`;
}

module.exports = generateMarkdown;

$(renderLicenseSection)