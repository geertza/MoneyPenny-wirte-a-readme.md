const fs=require("fs") 
inquirer = require('inquirer');
  axios = require('axios').default;
 questions = require('./utils/questions');
answers =""
layout= ""
gitInfo=""

// basic flow of operations
async function init() {
     answers = await inquirer.prompt(questions); 
     optionalInputs();
      convertToArray();
     gitInfo = await axios.get(`https://api.github.com/users/${answers.userName}`);
     layout= createMD(answers)
     writeToFile();}

    //  put info gathered from user into a template
function createMD() {
    return  `# ${answers.projectName}
  BY ${answers.developerName}      ${lincenseBadge} ${modBadge}
   
  ${contributionsOption}
  <img src= ${answers.image}></img>
  
  ## Table of Contents
  * [Purpose And Description](#purpose-and-description-of-application)
  * [Instalation](#installation-or-deployed-website)
  * [instructions](#Instructions-for-use) ${testsOptional}${creditOptional}
  * [Future Plans](#future-development)
  * [contact](#contact-info)
  
  ## Purpose And Description Of Application
  ${answers.purpose}
  
  ## Installation Or Deployed Website
${answers.installation}
  
  ## Instructions For Use
${answers.instructions}
  
${creditOption}
  
${testsOption}
  
  ## Future Development
  ${answers.future}

  ## Contact Info
          Github id    ${answers.userName}
          Email        ${gitInfo.data.email}
          If You have any questions fill free to respond to my Github account.
![profile image](${gitInfo.data.avatar_url}) 
`}
  // converts returned string data into useful array data
  modBadge=""
  lincenseBadge=""
  function convertToArray(){
     x= answers.licenseType.split(" ")
     y = answers.mods.split(" ")
         if (x == false) {
             lincenseBadge = ''
         }else{
      for (i=0;i<=x.length-1;i++){
          lincenseBadge += '![License](https://img.shields.io/badge/License-'+x[i]+'-blue.svg) '}}
          if (y == false) {
            modBadge = ''
        }else{
          for (i=0;i<y.length-1;i++){
          modBadge += '=='+y[i]+'== '}}
      }
      
      // If / switch statements for optional content
      testsOption=""
      contributionsOption = ""
      creditOption =""
      testsOptional=""
      creditOptional=""
      function optionalInputs(){
        for (i=0;i<3;i++){
                switch(i) {
                    case 0:if (answers.tests == false){}else{
                        testsOption = `## Testing
${answers.tests} 
                        `;
                      testsOptional=`
* [Testing](#testing)
`};
                      break;
                    case 1:
                        if (answers.credit == false){}else{
                        creditOption = `## Credit
${answers.credit}
                        `;
                      creditOptional= `
* [Credit](#credit)
`;}
                  break;
                case 2:
                  if (answers.contributions == false){}else{
                    contributionsOption=`Contributions- ${answers.contributions}`;}
                  }}}
  







    // write new readme file
function writeToFile(fileName, data) {
    fs.writeFile(`generatedreadme.md`, layout,(err) => {
        return console.log("Success your generatedreadme is ready");
    });
}



init();
