const fs = require('fs');
const read = fs.readFileSync('input.txt');
const boardingPasses = read.toString().split('\r\n').map(String);

const seatIdArr = [];
boardingPasses.forEach(line => {
  let seatId =  parseInt(line.replace(/F|L/g, 0).replace(/B|R/g, 1), 2);
  seatIdArr.push(seatId);
});
seatIdArr.sort(function(a, b) { return b - a; });

console.log('Highest Seat ID: '+ seatIdArr[0]);