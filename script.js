const gameboard = (() => { 
  return {"row1" : [-3, -3, -3], "row2" : [-3, -3, -3], "row3" : [-3, -3, -3]};
})();

function move() {
  return function playerMove(row, column) {
    if (gameboard[`row${row}`][column - 1] === -3) {
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
    if (gameboard[`row${cRow}`][cColumn] === -3) {
      gameboard[`row${cRow}`][cColumn] = 2
    }
    else computerMove();
    return (`${gameboard['row1']}\n${gameboard['row2']}\n${gameboard['row3']}`);
  }
}

function evaluate() {
  function row1() {
    return gameboard["row1"[0]] + gameboard["row1"[1]] + gameboard["row1"[2]];
  }
  function row2() {
    return gameboard["row2"[0]] + gameboard["row2"[1]] + gameboard["row2"[2]];
  }
  function row3() {
    return gameboard["row3"[0]] + gameboard["row3"[1]] + gameboard["row3"[2]];
  }
  function column1() {
    return gameboard["row1"][0] + gameboard["row2"][0] + gameboard["row3"][0];
  }
  function column2() {
    return gameboard["row1"][1] + gameboard["row2"][1] + gameboard["row3"][1];
  }
  function column3() {
    return gameboard["row1"][2] + gameboard["row2"][2] + gameboard["row3"][2];
  }
  function diagonal1() {
    return gameboard["row1"][0] + gameboard["row2"][1] + gameboard["row3"][2];
  }
  function diagonal2() {
    return gameboard["row1"][2] + gameboard["row2"][1] + gameboard["row3"][0];
  }
  return {row1, row2, row3, column1, column2, column3, diagonal1, diagonal2};
}
//todo function evalutate position
//todo difficulty levels, actual tic tac toe optimal move algorithmss
const test = move();