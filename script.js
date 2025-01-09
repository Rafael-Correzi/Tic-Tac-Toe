const gameboard = (() => {
  return {"row1" : ["p", "p", "p"], "row2" : ["p", "p", "p"], "row3" : ["p", "p", "p"]};
})();

function move() {
  return function playerMove(row, column) {
    if (gameboard[`row${row}`][column - 1] === "p") {
      gameboard[`row${row}`][column - 1] = 1 
      computerMove();
      return (`${gameboard['row1']}\n${gameboard['row2']}\n${gameboard['row3']}`);

    }
    else {
      return ("Movimento inválido");
      }
    }

  function computerMove() {
    let cRow = Math.floor(Math.random() * 3 + 1);
    let cColumn = Math.floor(Math.random() * 4);
    if (gameboard[`row${cRow}`][cColumn] === "p") {
      gameboard[`row${cRow}`][cColumn] = 0
    }
    else computerMove();
    return (`${gameboard['row1']}\n${gameboard['row2']}\n${gameboard['row3']}`);
  }
}


//todo function evalutate position
//todo difficulty levels, actual tic tac toe optimal move algorithms
const test = move();