// Create a Chess Board
// DID NOT SOLVE on my own

var size = 8;
var board = '\n';

for (var i = 0; i < size; i++) {
  for (var j = 0; j < size; j++) {
    if ((i + j) % 2 === 0) {
      board += '#';
    }
    else {
      board += ' ';
    }
  }
  board += '\n';
}

console.log(board);