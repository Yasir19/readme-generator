const inquirer = require("inquirer");

inquirer.prompt([
    {
        type: 'input',
        name: 'email',
        meassage: 'What is your email address',
        // validate the user input 
        validate: emailInput =>{
            if(emailInput){
                return true;
            }else{
                console.log('Please enter your email')
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'github',
        meassage: 'What is your GitHub',
        validate: githubInput =>{
            if(githubInput){
                return true;
            }else{
                console.log('Please enter your github username');
                return false;
            }
        }
        
    },
    {
        type : 'input',
        name : 'title',
        message: 'What is the project title?',
        validate: titleInput =>{
            if(titleInput){
                return true;
            }else{
                console.log('Please enter a title for your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message:'Insert your project description.',
        validate: descInput =>{
            if(descInput){
                return true;
            }else{
                console.log('Please enter a project decription');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is your instruction to install the app?',
        default: 'npm install'
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Instructions to be follow?'
    },
    {
       type: 'input',
       name: 'usage',
       message: 'What the user need to know about using the app?'
    },
    {
       type: 'input',
       name:  'contribution',
       message: 'What does the user need to know about contributing to the project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'instruction for testing the app'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What type of licence your project have?',
        choices: ['MIT', 'GNU AGPlv3', 'Apache License 2.0', 'OpenBDS', 'None']
    }
])