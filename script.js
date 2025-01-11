const gameboard = (() => { 
  return {"row1" : [-3, -3, -3], "row2" : [-3, -3, -3], "row3" : [-3, -3, -3]};
})();

function move() {
  return function playerMove(row, column) {
    if (gameboard[`row${row}`][column - 1] === -3) {
      gameboard[`row${row}`][column - 1] = 1 
      computerMove();
      evaluate();
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
function row1() {
  return (gameboard["row1"][0]) + (gameboard["row1"][1]) + (gameboard["row1"][2]);
}

function getGameState() {
  const row1Sum = (gameboard["row1"][0]) + (gameboard["row1"][1]) + (gameboard["row1"][2]);
  const row2Sum = gameboard["row2"][0] + gameboard["row2"][1] + gameboard["row2"][2];
  const row3Sum = gameboard["row3"][0] + gameboard["row3"][1] + gameboard["row3"][2];
  const column1Sum = gameboard["row1"][0] + gameboard["row2"][0] + gameboard["row3"][0];
  const column2Sum = gameboard["row1"][1] + gameboard["row2"][1] + gameboard["row3"][1];
  const column3Sum = gameboard["row1"][2] + gameboard["row2"][2] + gameboard["row3"][2];
  const diagonal1Sum = gameboard["row1"][0] + gameboard["row2"][1] + gameboard["row3"][2];
  const diagonal2Sum = gameboard["row1"][2] + gameboard["row2"][1] + gameboard["row3"][0];

  return {row1Sum, row2Sum, row3Sum, column1Sum, column2Sum, column3Sum, diagonal1Sum, diagonal2Sum};
}

const test = move();
function evaluate() {
  console.log(getGameState());
  if (Object.values(getGameState()).includes(3)) {
    console.log("Você ganhou!");
  }
  if (Object.values(getGameState()).includes(6)) {
    console.log("Você perdeu");
  }
}
//todo function evalutate position
//todo difficulty levels, actual tic tac toe optimal move algorithmss
