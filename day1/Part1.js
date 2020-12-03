const fs = require('fs');
const read = fs.readFileSync('input.txt');
const nums = read.toString().split('\n').map(Number);

for(let x of nums) {
  for(let y of nums) {
    if(x + y === 2020) {
      console.log(`Sum to 2020 are ${x} and ${y}`);
      console.log('Total: '+ x * y);
      return;
    }
  }
}
