const renderLicenseBadge = license =>{
    if(license !== 'None'){
        return`
        ![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)
        `;
    }
    return '';
};
const renderLicenseLink = license => {
   
    if (license !== 'None'){
    return`\n* [License](#license)\n`
    }
    return '';
};

const renderLicenseSection = license =>{
 if (license !== 'None'){
     return`
*License*  
The project is licensed by ${license}.
`
}
return '';
};

const renderInstruction = instructions => {
    if(!instructions){
        return '';
    }else{
        return`

        ## Instructions
        
        Instructions to be followed 
        
        ${instructions}

        `
    }
};

const renderUsage = usage => {
    if(!usage){
        return '';
    }else{
        return`

        ## usage
         
        ${usage}

        `
    }
};

const renderCont = contribution => {
    if(!contribution){
        return '';
    }else{
        return`

        ## Contribution

        ${contribution}

        `
    }
};

const renderTest = test => {
    if(!test){
        return '';
    }else{
        return`

        ## Test

        ${test}

        `
    }
};


const generateMarkdown = data =>{
    return `
    **${data.title}** 
    ${renderLicenseBadge(data.license)}

    ## Description
    ${data.description}

    * [Installation](#installation)

    * [Usage](#usage)

     ${renderLicenseBadge(data.license)}

     ## Installation

     To install necessary dependencies, run the following command

     ====================
     ${data.installation}
     ====================
    ${renderInstruction(data.instructions)}
    ${renderUsage(data.usage)}
    ${renderCont(data.contribution)}
    ${renderTest(data.test)}
     *Contact Me 

     E-mail:${data.email}/GitHub:https://github.com/${
        data.github}

    `;
};
module.exports = generateMarkdown