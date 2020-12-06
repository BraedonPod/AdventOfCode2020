const fs = require('fs');
const read = fs.readFileSync('input.txt');
const boardingPasses = read.toString().split('\r\n').map(String);

const seatIdArr = [];
boardingPasses.forEach(line => {
  let seatId =  parseInt(line.replace(/F|L/g, 0).replace(/B|R/g, 1), 2);
  seatIdArr.push(seatId);
});

let yourSeat;
for(let seatId of seatIdArr) {
  if(!seatIdArr.find(id => id === seatId - 1) && seatIdArr.find(id => id === seatId - 2)) {
    yourSeat = seatId - 1;
  }
}

console.log('Your Seat is: '+ yourSeat);