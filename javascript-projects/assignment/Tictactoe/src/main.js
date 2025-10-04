import "./style.css";

function player(mark) {
  return {
    mark,
    move(tile) {
      board[tile] = this.mark;
    },
  };
}

let board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;
let currentPlayer;

const player1 = player("X");
const player2 = player("O");
currentPlayer = player1;

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Tic Tac Toe</h1>
    <div id="game-board" class="board">
      <!-- We'll create 9 buttons for the board -->
    </div>
    <p id="message">Player X's turn</p>
    <button id="restart">Restart Game</button>
  </div>
`;

document.querySelector("#restart").addEventListener("click", () => {
  // Reset the board
  board = ["", "", "", "", "", "", "", "", ""];

  // Reset game state
  gameOver = false;
  currentPlayer = player1;

  // Update the UI
  displayBoard();
  document.querySelector("#message").textContent = "Player X's turn";
});

const gameBoard = document.querySelector("#game-board");

// Create 9 buttons (one for each board position)
for (let i = 0; i < 9; i++) {
  const button = document.createElement("button");
  button.classList.add("cell");
  button.dataset.index = i; // Store the position
  gameBoard.appendChild(button);
}

gameBoard.addEventListener("click", (e) => {
  if (e.target.classList.contains("cell")) {
    const position = e.target.dataset.index;
    playerTurn(position);
  }
});

function displayBoard() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell, index) => {
    cell.textContent = board[index]; // Show X, O, or empty
  });
}
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // columns
  [0, 4, 8],
  [2, 4, 6], // diagonals
];

// check win or tie or game ended
function checkWin() {
  for (let combinations of winningCombinations) {
    const [a, b, c] = combinations;
    if (board[a] === board[b] && board[b] === board[c] && board[a] !== "") {
      document.querySelector("#message").textContent = `${board[a]} wins! 🎉`;
      gameOver = true;
      return;
    }
  }
  if (board.every((tile) => tile !== "")) {
    document.querySelector("#message").textContent = "It's a tie! 🤝";
    gameOver = true;
  }
}

function playerTurn(pos) {
  if (gameOver) {
    document.querySelector("#message").textContent = "Game has ended!";
    return;
  }
  if (board[pos] === "") {
    currentPlayer.move(pos);
    displayBoard(); // Update the UI
    checkWin();

    // switch player
    currentPlayer = currentPlayer === player1 ? player2 : player1;

    // Update message if game isn't over
    if (!gameOver) {
      document.querySelector("#message").textContent =
        `Player ${currentPlayer.mark}'s turn`;
    }
  }
}
