const fs = require('fs');
const read = fs.readFileSync('input.txt');
const nums = read.toString().split('\n').map(Number);

for(let x of nums) {
  for(let y of nums) {
    for(let z of nums) {
      if(x + y + z === 2020) {
        console.log(`Sum to 2020 are ${x}, ${y} and ${z}`);
        console.log('Total: '+ x * y * z);
        return;
      }
    }
  }
}
