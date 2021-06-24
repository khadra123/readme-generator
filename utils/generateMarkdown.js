const licenseBadge = {
  ['MIT']: ['green', 'https://opensource.org/licenses/MIT'],
  ['Boost']: ['red', 'https://opensource.org/licenses/EPL-1.0'],
  ['Apache']: ['blue', 'https://opensource.org/licenses/Apache-2.0'],
  ['GNU']: ['blue', 'https://www.gnu.org/licenses/gpl-3.0'],
  ['Creative Commons']: ['lightgray', 'http://creativecommons.org/publicdomain/zero/1.0/'],
  ['Eclipes']: ['red', 'https://opensource.org/licenses/EPL-1.0'],
  ['ISC']: ['blue', 'https://opensource.org/licenses/ISC'],
  ['Mozilla Public License 2.0']: ['brightgreen', 'https://opensource.org/licenses/MPL-2.0'],
  ['Unlicense']: ['blue', 'http://unlicense.org/'],
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) { 
  return licenseBadge[license];
}
function renderLicenseTrim(license){
  return (license).replace(/ /g,'');
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}
  
  ---

  ##Description
  ${answers.desciption}

  ##Table of Contents
  *[Description](#description)
  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contributing](#contribution)
  *[Tests](#tests)
  *[Questions](#questions)

  ##Installation
  ${answers.installation}

  ##Usage
  ${answers.usage}

  ##Languages
  ${answers.languages}

  ##License
  ${answers.license}

  [![License](https://img.shields.io/badge/License-${renderLicenseTrim(answers.license)}-${renderLicenseBadge(answers.license)[0]})](${renderLicenseBadge(answers.license)[1]})
  
  ##Questions
  Reach me out on GitHub or email with any questions you have:

  Github Username: ${answers.githubUsername}

  Email: ${answers.email}

  ----
  README was generated with ❤️ by [professional-readme-generator](https://github.com/khadram123/readme-generator.git)
  `;
}

module.exports = generateMarkdown;
