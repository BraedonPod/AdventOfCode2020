const fs = require('fs');
const read = fs.readFileSync('input.txt');
const passports = read.toString().split('\r\n').join(' ').split('  ').map(passport => passport.split(' ').map(passport => passport.split(':')));

const passportFields = {
  byr: /(19[2-9][0-9]|200[0-2])/,
  iyr: /(201[0-9]|2020)/,
  eyr: /(202[0-9]|2030)/,
  hgt: /^(1[5-8][0-9]|19[0-3])cm$|^(59|6[0-9]|7[0-6])in$/,
  hcl: /^#[0-9a-f]{6}$/,
  ecl: /(amb|blu|brn|gry|grn|hzl|oth)/,
  pid: /^\d{9}$/
}

const validPassports = passports.filter((passport) => {
    let validCatagory = 0;
    for(pass of passport) { 
      if(pass[0] !== 'cid') {
        if(pass[1].match(passportFields[pass[0]])) { validCatagory++; }
      }
    }
    if(validCatagory >= 7) { return true; }
});
console.log('Number of valid passports: '+ validPassports.length);