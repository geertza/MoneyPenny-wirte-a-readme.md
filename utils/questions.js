'use strict';
const questions = [];

function Question(questionStr, answerVarName, answerType, choices, defaultAnswer) {
  this.message = questionStr;
  this.name = answerVarName;
  this.type = answerType;
  this.choices = choices;
  this.default = defaultAnswer
   questions.push(this);
}
new Question(
  ' developer name',
  'developerName',
  'input',
  null,
  
);
 new Question(
  'github username',
  'userName',
  'input',
  null,

);

new Question(
  'other contributors',
  'contributions',
  'input',
  null,
);

new Question(
 'Image location',
 'image',
 'input',
 null,
)
new Question(
  'Project Name?',
  'projectName',
  'input',
  null,
  
);
new Question(
  'purpose/discrimption of project  (how it can be useful)',
  'purpose',
  'editor',
  null,
);
new Question(
  'installation instructons or deployed website',
  'installation',
  'editor',
  null,
 `* first line
  * second
  * `,
);



new Question(
  'app instructions for using',
  'instructions',
  'editor',
  null,
);



 new Question(
  'lincense type',
  'licenseType',
  'input',
  null,
);



 new Question(
  'where to test and how to use',
  'tests',
  'editor',
  null,
);
  new Question(
  'credits',
  'credit',
  'editor',
  null, 
);
  new Question(
    'changes you would make in the future',
    'future',
    'editor',
    null,
    "none",
  );
  new Question(
    'modules,apis, any other extensions (leave only a space between each object, no commas',
    'mods',
    'input',
    null,
  );


module.exports = questions;
