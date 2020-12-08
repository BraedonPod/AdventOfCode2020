const fs = require('fs');
const read = fs.readFileSync('input.txt');
const customsForms = read.toString().split('\r\n').join(' ').split('  ').map(String);

const answerArr = [];

for(answers of customsForms) {
  answers = answers.replace(/\s/g, '');
  let groupAnswers =  answers.split('').filter(function(letter, pos, self) {
    return self.indexOf(letter) == pos;
  }).join('');
  answerArr.push(groupAnswers);
}

let totalCount = 0;
for(answers of answerArr) {
  totalCount = totalCount + answers.length;
}

console.log('Total Answers: '+totalCount);