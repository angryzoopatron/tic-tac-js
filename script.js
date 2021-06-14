let gameBoard = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9'
];

const myHTML = `
  <table>
  <tr id="top-row">
      <td data-cell-index="0" class="cell">${gameBoard[0]}</td>
      <td data-cell-index="1" class="cell">${gameBoard[1]}</td>
      <td data-cell-index="2" class="cell">${gameBoard[2]}</td>
  </tr>
  <tr id="mid-row">
      <td data-cell-index="3" class="cell">${gameBoard[3]}</td>
      <td data-cell-index="4" class="cell">${gameBoard[4]}</td>
      <td data-cell-index="5" class="cell">${gameBoard[5]}</td>
  </tr>
  <tr id="bot-row">
      <td data-cell-index="6" class="cell">${gameBoard[6]}</td>
      <td data-cell-index="7" class="cell">${gameBoard[7]}</td>
      <td data-cell-index="8" class="cell">${gameBoard[8]}</td>
  </tr>
  </table>
`;

const myFragment = document.createRange().createContextualFragment(myHTML);
document.body.appendChild(myFragment);

function handleCellClick(e) {
    const clickedCell = e.target;

    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));
}

// https://dev.to/bornasepic/pure-and-simple-tic-tac-toe-with-javascript-4pgn

// https://github.com/BornaSepic/Tic-Tac-Toe/blob/master/script.js
