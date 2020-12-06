const fs = require('fs');
const read = fs.readFileSync('input.txt');
const passports = read.toString().split('\r\n').join(' ').split('  ').map(passport => passport.split(' ').map(passport => passport.split(':')));

const fields = ['ecl', 'pid', 'eyr', 'hcl', 'byr', 'iyr', 'hgt'];

const validPassports = passports.filter((passport) => {
  let passportFields = [];
  for(pass of passport) { passportFields.push(pass[0]); }
  if(fields.every((field) => passportFields.includes(field))) { return true; }
});

console.log('Number of valid passports: '+ validPassports.length);