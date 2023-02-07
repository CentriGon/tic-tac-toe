const boxes = document.querySelectorAll('.gridPiece');
let isTurn = true;

const playerFactory = (playerSymbol) => {

    function mark(boxNum) {
        clickBox(boxNum, playerSymbol);
    }

    return{mark, playerSymbol};
    
}

const playerX = playerFactory("X");
const playerO = playerFactory("O");

for (let i = 0; i < 9; i++) {
    boxes[i].addEventListener('click', () => {
        if (isTurn == true) {
            playerX.mark(i);
            isTurn = false;
        }
        else if (isTurn == false) {
            playerO.mark(i);
            isTurn = true;
        }
    });
    
}

function clickBox(boxNum, playerSymbol) {
    const mark = document.createElement('h1');
    mark.textContent = playerSymbol;
    boxes[boxNum].appendChild(mark);
}


