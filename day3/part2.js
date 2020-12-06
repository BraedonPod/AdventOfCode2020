const fs = require('fs');
const read = fs.readFileSync('input.txt');
const slopeMap = read.toString().split('\r\n').map((line) => line.split(''));

function checkForTrees(right, down) {
  let x = right;
  let numOfTrees = 0;
  
  for(let y = down; y < slopeMap.length; y += down) {
    let endOfSlope = x % slopeMap[y].length;
  
    if(slopeMap[y][endOfSlope] === "#") {
      numOfTrees++;
    }
    x += right;
  }
  return numOfTrees;
}

const slopes = [[1,1],[3,1],[5,1],[7,1],[1,2]];
let totalTrees = 0;
for (let [x, y] of slopes) {
  totalTrees = (totalTrees === 0 ? checkForTrees(x,y) : totalTrees * checkForTrees(x,y));
}
console.log('Number of trees: '+ totalTrees);

