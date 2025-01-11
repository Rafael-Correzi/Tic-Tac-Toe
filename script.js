const gameboard = (() => { 
  return {"row1" : [-3, -3, -3], "row2" : [-3, -3, -3], "row3" : [-3, -3, -3]};
})();

function move() {
  let updatedGameboard = JSON.parse(JSON.stringify(gameboard));
  function playerMove(row, column) {
    if (updatedGameboard[`row${row}`][column - 1] === -3) {
      updatedGameboard[`row${row}`][column - 1] = 1 
      computerMove();
      evaluate();
      return (`${updatedGameboard['row1']}\n${updatedGameboard['row2']}\n${updatedGameboard['row3']}`);
    }
    else {
      return ("Movimento inválido");
      }
    
  }

  function computerMove() {
    let cRow = Math.floor(Math.random() * 3 + 1);
    let cColumn = Math.floor(Math.random() * 4)
    if (updatedGameboard[`row${cRow}`][cColumn] === -3) {
      updatedGameboard[`row${cRow}`][cColumn] = 2
    }
    else computerMove();
    return (`${updatedGameboard['row1']}\n${updatedGameboard['row2']}\n${updatedGameboard['row3']}`);
  }

  function getGameState() {
    const row1Sum = updatedGameboard["row1"][0] + updatedGameboard["row1"][1] + updatedGameboard["row1"][2];
    const row2Sum = updatedGameboard["row2"][0] + updatedGameboard["row2"][1] + updatedGameboard["row2"][2];
    const row3Sum = updatedGameboard["row3"][0] + updatedGameboard["row3"][1] + updatedGameboard["row3"][2];
    const column1Sum = updatedGameboard["row1"][0] + updatedGameboard["row2"][0] + updatedGameboard["row3"][0];
    const column2Sum = updatedGameboard["row1"][1] + updatedGameboard["row2"][1] + updatedGameboard["row3"][1];
    const column3Sum = updatedGameboard["row1"][2] + updatedGameboard["row2"][2] + updatedGameboard["row3"][2];
    const diagonal1Sum = updatedGameboard["row1"][0] + updatedGameboard["row2"][1] + updatedGameboard["row3"][2];
    const diagonal2Sum = updatedGameboard["row1"][2] + updatedGameboard["row2"][1] + updatedGameboard["row3"][0];

  return {row1Sum, row2Sum, row3Sum, column1Sum, column2Sum, column3Sum, diagonal1Sum, diagonal2Sum};
  }

  function evaluate() {
  console.log(test.getGameState());
  if (Object.values(test.getGameState()).includes(3)) {
    console.log("Você ganhou!");
    updatedGameboard = JSON.parse(JSON.stringify(gameboard));
  }
  if (Object.values(test.getGameState()).includes(6)) {
    console.log("Você perdeu");
    updatedGameboard = JSON.parse(JSON.stringify(gameboard));
  }
}
  return {playerMove, getGameState};
}

const test = move();
//todo function evalutate position
//todo difficulty levels, actual tic tac toe optimal move algorithmss
