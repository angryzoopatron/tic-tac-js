const gameStatus = document.querySelector('.game-status')

let gameActive = true;
let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const winner = () => `${currentPlayer} has won!`;
const draw = () => `DRAW!`
const playerTurn = () => `It's ${currentPlayer}'s turn`;


gameStatus.innerHTML = playerTurn();

function handleCell(clickedCell, clickedIndex) {
    gameState[clickedIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function handlePlayerTurn() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    gameStatus.innerHTML = `${currentPlayer}'s turn`;
}

function handleResults() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }

        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }
    if (roundWon) {
        gameStatus.innerHTML = winner();
        gameActive = false;
        return;
    }

    let gameDraw = !gameState.includes("");
    if (gameDraw) {
        gameStatus.innerHTML = draw();
        gameActive = false;
        return;
    }

    handlePlayerTurn();
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
