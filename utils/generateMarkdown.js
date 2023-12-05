// TODO: Create a function that returns a license badge based on which license is passed in
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "MPL") {
    return `[![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === "") {
    return "";
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  
  ## Description
  ${data.description}


  ## Table of Contents 
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contribution](#contribution)
  4. [Tests](#tests)
  5. [License](#license)
  6. [Questions](#questions)
  

  ## Installation
  ${data.installation}

  
  ## Usage
  ${data.usage}

  
  ## Contribution
  ${data.contribution}

  
  ## Tests
  ${data.tests}

  
  ## License
  License used for this project - ${renderLicenseSection(data.license)}
  
  
  ## Questions
  Feel free to contact me with any questions you may have. 
  - Email: ${data.email_address}
  - GitHub Username: ${data.github_username}

`;
}

module.exports = generateMarkdown;
