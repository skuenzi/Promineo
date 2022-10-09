let turn = "X";
const cells = document.querySelectorAll(".cell");
let roundWon = false;
let winner

const handleClick = (e) => {
  // check if cell has already has a symbol
  if (e.target.innerText) {
    $("body").append(`
            <p class="alert alert-primary text-center" role="alert">
                This one is full, try a different square!
            </p>
        `);
    $(".alert").hide(4000);

    return;
  }

  // add x if turn is x and vice versa
  if (turn === "X") {
    e.target.innerText = "X";
    turn = "O";
    $(".turn").text("Turn: O");
  } else {
    e.target.innerText = "O";
    turn = "X";

    $(".turn").text("Turn: X");
  }
  checkWin();
};

const checkWin = () => {
  // create array with current cell value
  let cellsText = [];
  cells.forEach((cell) => cellsText.push(cell.innerText));

  let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winConditions.length; i++) {
    const condition = winConditions[i];
    const cellA = cellsText[condition[0]];
    const cellB = cellsText[condition[1]];
    const cellC = cellsText[condition[2]];

    if (cellA === "" || cellB === "" || cellC === "") {
      continue;
    }
    if (cellA === cellB && cellB === cellC) {
      roundWon = true;
      winner = cellA
    }
  }

  if (roundWon) {
    $("body").append(`
        <p class="alert alert-primary text-center" role="alert">
            ${winner} wins!
        </p>
      `);
  } else if (!cellsText.includes("")) {
    $("body").append(`
        <p class="alert alert-primary text-center" role="alert">
            It's a draw!
        </p>
    `);
  }
};

cells.forEach((cell) => cell.addEventListener("click", handleClick));
$('.btn').click(() => {
    cells.forEach(cell => cell.innerText = '')
    turn = 'X'
    $(".turn").text("Turn: X");
})