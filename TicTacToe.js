var program = require('commander');

var board = [
["a"," | ", "b"," | ", "c"],
["_", " | ", "_", " | ", "_"],
["d"," | ", "e"," | ", "f"],
["_", " | ", "_", " | ", "_"],
["g"," | ", "h"," | ", "i"],

];
//process.argv or npm commander

program
  .version('0.1.0')
  .arguments('<cmd> [env]')
  .action(function (cmd, env) {
     cmdValue = cmd;
     envValue = env;
  });

var wonX = false;
var wonO = false;
var count = 0; //count is even, use X, count is odd use O.

//take in user input
while(process.argv.length > 0 || wonX = true || wonO = true) {
	console.log(board);
	board.forEach(row => {
		if (row.contains(process.argv[0]))
		{
			let ind = row.IndexOf(process.argv[0]);
			if (count%2 === 0) {
				row[ind] = "X";
			} else {
				row[ind] = "O";
			}
			count++;
		}
	});
	console.log(board);
	//win conditions
	if (board[0][0]==="X" && board[0][2]==="X" && board[0][4]==="X") {
		wonX = true;
	} else if (board[2][0]==="X" && board[2][2]==="X" && board[2][4]==="X") {
		wonX = true;
	} else if (board[4][0]==="X" && board[4][2]==="X" && board[4][4]==="X") {
		wonX = true;
	} else if (board[0][0]==="O" && board[0][2]==="O" && board[0][4]==="O") {
		wonO = true;
	} else if (board[2][0]==="O" && board[2][2]==="O" && board[2][4]==="O") {
		wonO = true;
	} else if (board[4][0]==="O" && board[4][2]==="O" && board[4][4]==="O") {
		wonO = true;
	} else if (board[0][0]==="O" && board[2][2]==="O" && board[4][4]==="O") { //diagonals
		wonO = true;
	} else if (board[0][0]==="X" && board[2][2]==="X" && board[4][4]==="X") {
		wonX = true;
	} else if (board[4][0]==="O" && board[2][2]==="O" && board[0][4]==="O") { //diagonals
		wonO = true;
	} else if (board[4][0]==="X" && board[2][2]==="X" && board[0][4]==="X") {
		wonX = true;
	}

	console.log(board);
}

wonX ? console.log("Player" + wonX + "WON!") : console.log("Player" + wonO + "WON!")
