const fs = require('fs');
const read = fs.readFileSync('input.txt');
const passwords = read.toString().split('\n').map(String);

const validPasswords = passwords.filter((pass) => {
  const [policy, password] = pass.split(':');
  const [unsplitBoundary, letter] = policy.split(' ');
  const [firstBoundary, secondBoundary] = unsplitBoundary.split('-').map(Number);

  const regex = new RegExp(`[^${letter}]*`, 'g');
  const numLetter = password.replace(regex, '').length;
  const validPass = numLetter >= firstBoundary && numLetter <= secondBoundary;

  return validPass;
});

//458
console.log('Number of valid passwords: '+ validPasswords.length);