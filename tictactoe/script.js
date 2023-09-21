document.addEventListener("DOMContentLoaded", function () {
  const dataCells = document.querySelectorAll("[data-cell]");
  let currentPlayer = "X";
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  dataCells.forEach(function (cell) {
    cell.addEventListener("click", handleClick);
  });

  function handleClick(event) {
    console.log("clicked");
    const cell = event.target;

    if (cell.textContent === "") {
      placeMark(cell, currentPlayer);
      cell.removeEventListener("click", handleClick);
      cell.classList.add("clicked");

      if (checkWin(currentPlayer)) {
        console.log("checkWin function is called");
        const winningCombination = findWinningCombination(currentPlayer);
        highlightWinningCells(winningCombination);
        setTimeout(function () {
          gameState(false);
        }, 100); // Delay the alert slightly
      } else if (checkDraw()) {
        gameState(true);
      } else {
        changePlayer();
      }
    }
  }

  function checkWin(currentPlayer) {
    console.log("checkwin function is called");
    return winningCombinations.some(function (combination) {
      return combination.every(function (index) {
        return dataCells[index].classList.contains(currentPlayer);
      });
    });
  }

  function checkDraw() {
    return [...dataCells].every(function (cell) {
      return cell.classList.contains("X") || cell.classList.contains("O");
    });
  }

  function gameState(draw) {
    if (draw) {
      alert("It's a draw! Do you want to play again?");
      restartGame();
    } else {
      const winningCombination = findWinningCombination(currentPlayer);
      if (winningCombination) {
        alert(
          `${
            currentPlayer === "X" ? "Player X" : "Player O"
          } won! Do you want to play again?`
        );
        restartGame();
      }
    }
  }

  function findWinningCombination(player) {
    return winningCombinations.find(function (combination) {
      if (
        combination.every(function (index) {
          return dataCells[index].classList.contains(player);
        })
      ) {
        return combination;
      }
    });
  }

  function highlightWinningCells(winningCombination) {
    winningCombination.forEach(function (index) {
      dataCells[index].classList.add("winning-cell");
    });
  }

  function restartGame() {
    dataCells.forEach(function (cell) {
      cell.textContent = "";
      cell.classList.remove("X", "O", "winning-cell");
      cell.addEventListener("click", handleClick);
    });
    currentPlayer = "X";
  }

  function changePlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }

  function placeMark(cell, player) {
    console.log("placemark function is called");
    cell.textContent = player;
    cell.classList.add(player);
  }
});
