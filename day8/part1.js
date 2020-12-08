const fs = require('fs');
const read = fs.readFileSync('input.txt');
const linesOfCode = read.toString().split('\r\n').map(code => code.split(' '));

let indexList = new Set(); 
let acc = 0;
let x = 0;

while(!indexList.has(x)) {
  const [ instr, val ] = linesOfCode[x];
  indexList.add(x);
  switch (instr) {
    case 'acc': acc += parseInt(val); x++; break;
    case 'jmp': x += parseInt(val); break;
    case 'nop': x++; break;
  }
}

console.log('Accumulator value: '+ acc);