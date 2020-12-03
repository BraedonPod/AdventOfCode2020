const fs = require('fs');
const read = fs.readFileSync('input.txt');
const passwords = read.toString().split('\n').map(String);

const validPasswords = passwords.filter((pass) => {
  let [policy, password] = pass.split(':');
  password = password.trim();
  const [unsplitBoundary, letter] = policy.split(' ');
  const [firstBoundary, secondBoundary] = unsplitBoundary.split('-').map(Number);

  const positionOneLetter = (password[firstBoundary - 1] === letter);
  const positionTwoLetter = (password[secondBoundary - 1] === letter);

  let validPass;
  if(positionOneLetter ^ positionTwoLetter) { validPass = true; }

  return validPass;
});

//342
console.log('Number of valid passwords: '+ validPasswords.length);