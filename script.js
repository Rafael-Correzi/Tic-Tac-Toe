const gameboard = (() => {
  return { row1: [-3, -3, -3], row2: [-3, -3, -3], row3: [-3, -3, -3] };
})();

function play(mode) {
  let updatedGameboard = JSON.parse(JSON.stringify(gameboard));

  let moveCount = 0;
  function playerMove(row, column) {
    if (updatedGameboard[`row${row}`][column - 1] === -3) {
      updatedGameboard[`row${row}`][column - 1] = 1;
      selectMode();
    } else {
      return "Movimento inválido";
    }
  }

  function selectMode() {
    if (mode === "easiest") {
      test.evaluate();
      computerMoveEasiest();
    }
    if (mode === "impossible") {
      test2.evaluate();
      if (moveCount === 0) {
        go().moveOne();
      }
      else if (moveCount === 1) {
        go().moveTwo();
      }
      else if (moveCount >= 2) {
        go().moveAfter();
      }
    }
  }
    function computerMoveEasiest() {
      let cRow = Math.floor(Math.random() * 3 + 1);
      let cColumn = Math.floor(Math.random() * 4);
      if ((updatedGameboard[`row${cRow}`][cColumn]) === -3) {
        updatedGameboard[`row${cRow}`][cColumn] = 2;
        evaluate();
      } 
      else {
        computerMoveEasiest();
      }
    }
    function randomP() {
      let cRow = Math.floor(Math.random() * 3 + 1);
      let cColumn = Math.floor(Math.random() * 4);
      if ((updatedGameboard[`row${cRow}`][cColumn]) === -3) {
        updatedGameboard[`row${cRow}`][cColumn] = 1;
        selectMode();
        evaluate();
  
      } 
      else {
        randomP();
      }
      
    }



    const go = function computerMoveImpossible() {

  const cornerTL = updatedGameboard["row1"][0];
  const cornerTR = updatedGameboard["row1"][2];
  const cornerBR = updatedGameboard["row3"][2];
  const cornerBL = updatedGameboard["row3"][0];
  const edgeT = updatedGameboard["row1"][1];
  const edgeR = updatedGameboard["row2"][2];
  const edgeB = updatedGameboard["row3"][1];
  const edgeL = updatedGameboard["row2"][0];
  const center = updatedGameboard["row2"][1];
      const moveOne = function firstCMove() {
        if (center === 1) {
          updatedGameboard["row1"][0] = 2;
        }
        else if (
          cornerTL === 1 ||
          cornerTR === 1 ||
          cornerBR === 1 ||
          cornerBL === 1 ||
          edgeT === 1 ||
          edgeR === 1 ||
          edgeB === 1 ||
          edgeL === 1
        ) {
          updatedGameboard["row2"][1] = 2;
        }
        moveCount++
        evaluate();
      }

      const moveTwo = function secondCMove() {

        switch (true) {
          case ((cornerTL === 1 && cornerBR === 1) || (cornerTR === 1 && cornerBL === 1) ||
            (cornerTL === 1 && cornerBL === 1) || (cornerTL === 1 && edgeB === 1) ||
            (cornerBR === 1 && edgeT === 1) || (cornerTR === 1 && edgeB === 1) ||
            (cornerBL === 1 && edgeT === 1) || (edgeT === 1 && edgeB === 1) ||
            (center === 1 && edgeR === 1)):
            updatedGameboard["row2"][0] = 2;
            break;
          case ((cornerTL === 1 && cornerTR === 1) || (edgeR === 1 && edgeL === 1) ||
            (center === 1 && edgeB === 1)):
            updatedGameboard["row1"][1] = 2;
            break;
          case ((cornerBL && cornerBR === 1) || (center === 1 && edgeT === 1)):
            updatedGameboard["row3"][1] = 2;
            break;
          case ((cornerTL === 1 && edgeT === 1) || (cornerBR === 1 && edgeR === 1) ||
            (cornerTL === 1 && edgeR === 1) || (edgeT === 1 && edgeR === 1) ||
            (center === 1 && cornerBL === 1) || (center === 1 && cornerBR === 1)):
            updatedGameboard["row1"][2] = 2;
            break;
          case ((cornerTR === 1 && edgeT === 1) || (cornerBL === 1 && edgeL === 1) ||
            (cornerTR === 1 && edgeL === 1) || (edgeT === 1 && edgeL === 1)):
            updatedGameboard["row1"][0] = 2;
            break;
          case ((cornerBL === 1 && edgeB === 1) || (cornerTR === 1 && edgeR === 1) ||
            (cornerBL === 1 && edgeR === 1) || (edgeR === 1 && edgeB === 1)):
            updatedGameboard["row3"][2] = 2;
            break;
          case ((cornerBR === 1 && edgeB === 1) || (cornerTL === 1 && edgeL === 1) ||
            (cornerBR === 1 && edgeL === 1) || (edgeB === 1 && edgeL === 1) ||
            (center === 1 && cornerTR === 1)):
            updatedGameboard["row3"][0] = 2;
            break;
          case ((cornerTR === 1 && cornerBR === 1) || (center === 1 || edgeL === 1)):
            updatedGameboard["row2"][2] = 2;
            break;
        }
        moveCount++
        evaluate();
      }

      const moveAfter = function subsequentMoves() {
        switch (true) {
          case getGameState().row1Sum === 1:
            for (i = 0; i < 3; i++) {
              if (updatedGameboard[`row1`][i] === -3) {
                updatedGameboard[`row1`][i] = 2;
              }
            }
            break;
          case getGameState().row2Sum === 1:
            for (i = 0; i < 3; i++) {
              if (updatedGameboard[`row2`][i] === -3) {
                updatedGameboard[`row2`][i] = 2;
              }
            }
            break;
          case getGameState().row3Sum === 1:
            for (i = 0; i < 3; i++) {
              if (updatedGameboard[`row3`][i] === -3) {
                updatedGameboard[`row3`][i] = 2;
              }
            }
            break;
          case getGameState().column1Sum === 1:
            for (i = 0; i < 3; i++) {
              if (updatedGameboard[`row${i}`][0] === -3) {
                updatedGameboard[`row${i}`][0] = 2;
              }
            }
            break;
          case getGameState().column1Sum === 1:
            for (i = 1; i < 4; i++) {
              if (updatedGameboard[`row${i}`][1] === -3) {
                updatedGameboard[`row${i}`][1] = 2;
              }
            }
            break;
          case ((getGameState().column2Sum === 1)):
            for (i = 1; i < 4; i++) {
              if (updatedGameboard[`row${i}`][2] === -3) {
                updatedGameboard[`row${i}`][2] = 2;
              }
            }
            break;
          case getGameState().column3Sum === 1:
            for (i = 1; i < 4; i++) {
              if (updatedGameboard[`row${i}`][0] === -3) {
                updatedGameboard[`row${i}`][i] = 2;
              }
            }
            break;
          case getGameState().diagonal1Sum === 1:
            if (cornerTL === -3) {
              cornerTL = 2;
            }
            else if (center === -3) {
              center = 2;
            }
            else if (cornerBR === -3) {
              cornerBR === 2;
            }
            break;
          case getGameState().diagonal2Sum === 1:
            if (cornerTR === -3) {
              cornerTL = 2;
            }
            else if (center === -3) {
              center = 2;
            }
            else if (cornerBL === -3) {
              cornerBR === 2;
            }
            break;
          case getGameState().row1Sum === -1:
            for (i = 0; i < 3; i++) {
              if (updatedGameboard[`row1`][i] === -3) {
                updatedGameboard[`row1`][i] = 2;
              }
            }
            break;
          case getGameState().row2Sum === -1:
            for (i = 0; i < 3; i++) {
              if (updatedGameboard[`row2`][i] === -3) {
                updatedGameboard[`row2`][i] = 2;
              }
            }
            break;
          case getGameState().row3Sum === -1:
            for (i = 0; i < 3; i++) {
              if (updatedGameboard[`row3`][i] === -3) {
                updatedGameboard[`row3`][i] = 2;
              }
            }
            break;
          case getGameState().column1Sum === -1:
            for (i = 0; i < 3; i++) {
              if (updatedGameboard[`row${i}`][0] === -3) {
                updatedGameboard[`row${i}`][0] = 2;
              }
            }
            break;
          case getGameState().column1Sum === -1:
            for (i = 1; i < 4; i++) {
              if (updatedGameboard[`row${i}`][1] === -3) {
                updatedGameboard[`row${i}`][1] = 2;
              }
            }
            break;
          case ((getGameState().column2Sum === -1)):
            for (i = 1; i < 4; i++) {
              if (updatedGameboard[`row${i}`][2] === -3) {
                updatedGameboard[`row${i}`][2] = 2;
              }
            }
            break;
          case getGameState().column3Sum === -1:
            for (i = 1; i < 4; i++) {
              if (updatedGameboard[`row${i}`][0] === -3) {
                updatedGameboard[`row${i}`][i] = 2;
              }
            }
            break;
          case getGameState().diagonal1Sum === -1:
            if (cornerTL === -3) {
              cornerTL = 2;
            }
            else if (center === -3) {
              center = 2;
            }
            else if (cornerBR === -3) {
              cornerBR === 2;
            }
            break;
          case getGameState().diagonal2Sum === -1:
            if (cornerTR === -3) {
              cornerTL = 2;
            }
            else if (center === -3) {
              center = 2;
            }
            else if (cornerBL === -3) {
              cornerBR === 2;
            }
            break;
          default :
            test2.computerMoveEasiest();
        }
        moveCount++
        evaluate();
       
      }
       return { moveOne, moveTwo, moveAfter };
    }
      

    function getGameState() {
      let row1Sum =
        updatedGameboard["row1"][0] +
        updatedGameboard["row1"][1] +
        updatedGameboard["row1"][2];
      let row2Sum =
        updatedGameboard["row2"][0] +
        updatedGameboard["row2"][1] +
        updatedGameboard["row2"][2];
      let row3Sum =
        updatedGameboard["row3"][0] +
        updatedGameboard["row3"][1] +
        updatedGameboard["row3"][2];
      let column1Sum =
        updatedGameboard["row1"][0] +
        updatedGameboard["row2"][0] +
        updatedGameboard["row3"][0];
      let column2Sum =
        updatedGameboard["row1"][1] +
        updatedGameboard["row2"][1] +
        updatedGameboard["row3"][1];
      let column3Sum =
        updatedGameboard["row1"][2] +
        updatedGameboard["row2"][2] +
        updatedGameboard["row3"][2];
      let diagonal1Sum =
        updatedGameboard["row1"][0] +
        updatedGameboard["row2"][1] +
        updatedGameboard["row3"][2];
      let diagonal2Sum =
        updatedGameboard["row1"][2] +
        updatedGameboard["row2"][1] +
        updatedGameboard["row3"][0];
      let total = 
        row1Sum + 
        row2Sum + 
        row3Sum;

      return {
        row1Sum,
        row2Sum,
        row3Sum,
        column1Sum,
        column2Sum,
        column3Sum,
        diagonal1Sum,
        diagonal2Sum,
        total
      };
    } 

    function evaluate() {
      let wins = 0;
      let losses = 0;
      let draws = 0;
      let quit;
      console.log(`${updatedGameboard["row1"]}\n${updatedGameboard["row2"]}\n${updatedGameboard["row3"]}`);
      if (Object.values(getGameState()).includes(3)) {
        console.log(`${updatedGameboard["row1"]}\n${updatedGameboard["row2"]}\n${updatedGameboard["row3"]}`);
        console.log("Você ganhou!");
        this.updatedGameboard = null;
        this.updatedGameboard = JSON.parse(JSON.stringify(gameboard));
        wins++
        moveCount = 0;
      }
      if (Object.values(getGameState()).includes(6)) {
        console.log(`${updatedGameboard["row1"]}\n${updatedGameboard["row2"]}\n${updatedGameboard["row3"]}`);
        console.log("Você perdeu");
        this.updatedGameboard = null;
        this.updatedGameboard = JSON.parse(JSON.stringify(gameboard));
        losses++
        moveCount = 0;
      }
      else if (getGameState().total === 13 || getGameState().total === 14) {
        console.log(`${updatedGameboard["row1"]}\n${updatedGameboard["row2"]}\n${updatedGameboard["row3"]}`);
        console.log("Empate");
        this.updatedGameboard = null;
        this.updatedGameboard = JSON.parse(JSON.stringify(gameboard));
        draws++
        moveCount = 0;
      }
      return {wins, losses, draws, quit};
    }

    return { playerMove, getGameState, computerMoveEasiest, randomP, evaluate, updatedGameboard};
}

  /* row1[0] row1[1] row1[2]
  
     row2[0] row2[1] row2[2]
  
     row3[0] row3[1] row3[2]
  
  
  If X plays a corner opening move, O should take center, and then an edge, forcing X to block in the next move.
  This will stop any forks from happening. When both X and O are perfect players and X chooses to start by marking a corner,
  O takes the center, and X takes the corner opposite the original. In that case, O is free to choose any edge as its second move.
  However, if X is not a perfect player and has played a corner and then an edge, O should not play the opposite edge as its second move,
  because then X is not forced to block in the next move and can fork.
  If X plays edge opening move, O should take center or one of the corners adjacent to X, and then follow the above list of priorities,
  mainly paying attention to block forks. With perfect play, O can also force a draw by taking the opposite edge from X.
  If X plays the center opening move, O should take a corner, and then follow the above list of priorities, mainly paying attention to block forks.
  When X plays corner first, and O is not a perfect player, the following may happen:
  
  If O responds with a center mark (best move for them), a perfect X player will take the corner opposite the original. Then O should play an edge.
  However, if O plays a corner as its second move, a perfect X player will mark the remaining corner, blocking O's 3-in-a-row and making their own fork.
  If O responds with a corner mark, X is guaranteed to win. By taking any of the other two corners, O can only take the position between the two Xs,
  then by taking the remaining corner to create a fork, X will win on the next move.
  If O responds with an edge mark, X is guaranteed to win. By taking center, O can only take the corner opposite the corner which X plays first,
  then by taking a corner to create a fork, X will win on the next move.
  
  https://en.wikipedia.org/wiki/Tic-tac-toe#Strategy
  
  */

  const test = play("easiest");
  const test2 = play("impossible");
  console.log(test2.playerMove(2,1));
  console.log(test2.playerMove(1,1));
  console.log(test2.playerMove(1,3));
  console.log(test2.playerMove(3,2));
  console.log(test2.playerMove(2,3));
  console.log(test2.playerMove(3,3));
//todo function evalutate position
//todo difficulty levels, actual tic tac toe optimal move algorithmss
