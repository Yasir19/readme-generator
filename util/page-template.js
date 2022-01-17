const renderLicenseBadge = (projectLicense) => {
  if (projectLicense !== "None") {
    return ` ![GitHub license](https://img.shields.io/badge/license-${projectLicense}-blue.svg)`;
  }
  return "";
};
const renderLicenseLink = (projectLicense) => {
  if (projectLicense !== "None") {
    return `\n* [License](#license)\n`;
  }
  return "";
};

const renderLicenseSection = (projectLicense) => {
  if (projectLicense !== "None") {
    return `*License*\n The project is licensed by ${projectLicense}.`;
  }
  return "";
};

const renderInstruction = (instructions) => {
  if (!instructions) {
    return "";
  } else {
    return `
    ## Instructions
        
    Instructions to be followed 
        
    ${instructions}

        `;
  }
};

const renderUsage = (usage) => {
  if (!usage) {
    return "";
  } else {
    return `
    ## usage
    ${usage}
    

        `;
  }
};

const renderCont = (contribution) => {
  if (!contribution) {
    return "";
  } else {
    return `
    ## Contribution
    ${contribution}

        `;
  }
};

const renderTest = (test) => {
  if (!test) {
    return "";
  } else {
    return `
    ## Test
    ${test}

        `;
  }
};

const generateMarkdown = (data) => {
  return `
    **${data.title}** 
    ${renderLicenseBadge(data.projectLicense)}

    ## Description
    ${data.description}
    
    * [Installation](#installation)
    * [Usage](#usage)
    ${renderLicenseLink(data.projectLicense)}
    * [Usage](#usage)

     ${renderLicenseBadge(data.projectLicense)}

     ## Installation

     To install necessary dependencies, run the following command

     ====================
     ${data.installation}
     ====================
    ${renderInstruction(data.instructions)}
    ${renderUsage(data.usage)}
    ${renderLicenseSection(data.projectLicense)}
    ${renderCont(data.contribution)}
    ${renderTest(data.test)}
     *Contact Me 

     E-mail:${data.email}/GitHub:https://github.com/${data.github}

    `;
};
module.exports = generateMarkdown;
