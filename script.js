const boxes = document.querySelectorAll('.gridPiece');
const headers = document.querySelectorAll('.gridPiece h1');
const header = document.querySelector('.winScreen h2');

const restartBtn = document.querySelector('.restartButton').addEventListener('click', () => {
    const grayOut = document.querySelector('.grayOut');
    grayOut.removeAttribute("id");
    grayOut.style.cssText = "content-visibility: hidden;";
    
    for (let i = 0; i < 9; i++) {
        headers[i].textContent="";
    }
    isTurn = true;
    start();
});

let isTurn = true;

const playerFactory = (playerSymbol) => {

    function mark(boxNum) {
        clickBox(boxNum, playerSymbol);
    }

    return{mark, playerSymbol};
    
}

let boxesArray = [];
const playerX = playerFactory("X");
const playerO = playerFactory("O");

function start() {
    for (let i = 0; i < 9; i++) {

        boxesArray[i] = {
            box: boxes[i],
            isEmpty: true,
            symbol: "",
        }

        console.log(boxesArray[i].isEmpty);
    
        boxesArray[i].box.addEventListener('click', () => {
            if (isTurn == true && boxesArray[i].isEmpty == true) {
                playerX.mark(i);
                isTurn = false;
                boxesArray[i].isEmpty = false;
                boxesArray[i].symbol = "X";
                isDone();
            }
            else if (isTurn == false && boxesArray[i].isEmpty == true) {
                playerO.mark(i);
                isTurn = true;
                boxesArray[i].isEmpty = false;
                boxesArray[i].symbol = "O";
                isDone();
            }
        });
    
    }
}

function clickBox(boxNum, playerSymbol) {
    headers[boxNum].textContent = playerSymbol;
}

function isDone() {
    if ((boxesArray[2].isEmpty == false) && (boxesArray[0].symbol == boxesArray[1].symbol) &&  (boxesArray[1].symbol == boxesArray[2].symbol)) {
        endScreen(boxesArray[0].symbol);
    }
    else if ((boxesArray[3].isEmpty == false) && (boxesArray[3].symbol == boxesArray[4].symbol) &&  (boxesArray[4].symbol == boxesArray[5].symbol)) {
        endScreen(boxesArray[3].symbol);
    }
    else if ((boxesArray[6].isEmpty == false) && (boxesArray[6].symbol == boxesArray[7].symbol) &&  (boxesArray[7].symbol == boxesArray[8].symbol)) {
        endScreen(boxesArray[6].symbol);
    }
    else if ((boxesArray[0].isEmpty == false) && (boxesArray[0].symbol == boxesArray[3].symbol) &&  (boxesArray[3].symbol == boxesArray[6].symbol)) {
        endScreen(boxesArray[0].symbol);
    }
    else if ((boxesArray[1].isEmpty == false) && (boxesArray[1].symbol == boxesArray[4].symbol) &&  (boxesArray[4].symbol == boxesArray[7].symbol)) {
        endScreen(boxesArray[1].symbol);
    }
    else if ((boxesArray[2].isEmpty == false) && (boxesArray[2].symbol == boxesArray[5].symbol) &&  (boxesArray[5].symbol == boxesArray[8].symbol)) {
        endScreen(boxesArray[2].symbol);
    }
    else if ((boxesArray[4].isEmpty == false) && (boxesArray[0].symbol == boxesArray[4].symbol) &&  (boxesArray[4].symbol == boxesArray[8].symbol)) {
        endScreen(boxesArray[0].symbol);
    }
    else if ((boxesArray[6].isEmpty == false) && (boxesArray[6].symbol == boxesArray[4].symbol) &&  (boxesArray[4].symbol == boxesArray[2].symbol)) {
        endScreen(boxesArray[6].symbol);
    }
    else if (((boxesArray[6].isEmpty == false)) && (boxesArray[0].isEmpty == boxesArray[1].isEmpty) &&  (boxesArray[1].isEmpty == boxesArray[2].isEmpty) && (boxesArray[2].isEmpty == boxesArray[3].isEmpty) &&  (boxesArray[3].isEmpty == boxesArray[4].isEmpty) && (boxesArray[4].isEmpty == boxesArray[5].isEmpty &&  (boxesArray[5].isEmpty == boxesArray[6].isEmpty) && (boxesArray[6].isEmpty == boxesArray[7].isEmpty) &&  (boxesArray[7].isEmpty == boxesArray[8].isEmpty))) {
        endScreen("tie");
    }
}

function endScreen(symbol) {
    const grayOut = document.querySelector('.grayOut');
    const winScreen = document.querySelector('.winScreen')

    if (symbol == "tie") {
        header.textContent = `Tie!`;
    }
    else {
        header.textContent = ` Player ${symbol} wins!`;
    }

    grayOut.setAttribute('id', 'blurScreen');
    grayOut.style.cssText = "content-visibility: visible;";
}

start();


