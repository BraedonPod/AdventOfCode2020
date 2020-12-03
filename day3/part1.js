const fs = require('fs');
const read = fs.readFileSync('input.txt');
let slopeMap = read.toString().split('\r\n').map((line) => line.split(''));

let x = 3;
let numOfTrees = 0;

for(let y = 1; y < slopeMap.length; y++) {
  let endOfSlope = x % slopeMap[y].length;

  if(slopeMap[y][endOfSlope] === "#") {
    numOfTrees++;
  }
  x += 3;
}

console.log('Number of trees: '+ numOfTrees);