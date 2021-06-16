const gameStatus = document.querySelector('.game-status')

let gameActive = true;
let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];

const winner = () => `${currentPlayer} has won!`;
const draw = () => `DRAW!`
const playerTurn = () => `It's ${currentPlayer}'s turn`;

const tableContainer = document.createElement('div');
const myHTML = `
  <table id="center">
  <tr id="top-row">
      <td data-cell-index="0" class="cell"></td>
      <td data-cell-index="1" class="cell"></td>
      <td data-cell-index="2" class="cell"></td>
  </tr>
  <tr id="mid-row">
      <td data-cell-index="3" class="cell"></td>
      <td data-cell-index="4" class="cell"></td>
      <td data-cell-index="5" class="cell"></td>
  </tr>
  <tr id="bot-row">
      <td data-cell-index="6" class="cell"></td>
      <td data-cell-index="7" class="cell"></td>
      <td data-cell-index="8" class="cell"></td>
  </tr>
  </table>
`;

const myFragment = document.createRange().createContextualFragment(myHTML);
tableContainer.appendChild(myFragment);
document.body.prepend(tableContainer);

gameStatus.innerHTML = playerTurn();

function handleCell(clickedCell, clickedIndex) {
    gameState[clickedIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function handlePlayerTurn() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    gameStatus.innerHTML = currentPlayer;
}

function handleResults() {

}

function handleClick(e) {
    console.log('clicked!')
    const clickedCell = e.target;

    const clickIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (gameState[clickIndex] !== "" || !gameActive) return;

    handleCell(clickedCell, clickIndex);
    handleResults();
}

function handleRestart(e) {
    gameActive = true;
    currentPlayer = 'X';
    gameState = ['', '', '', '', '', '', '', '', ''];

    gameStatus.innerHTML = playerTurn();

    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleClick));
document.querySelector('.restart').addEventListener('click', handleRestart);


// https://dev.to/bornasepic/pure-and-simple-tic-tac-toe-with-javascript-4pgn

// https://github.com/BornaSepic/Tic-Tac-Toe/blob/master/script.js
