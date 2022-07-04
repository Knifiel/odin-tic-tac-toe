import board from "./gameBoard.mjs";
import player from "./player.mjs";
import renderer from "./renderer.mjs";

const gameWindow = document.getElementById('playerWindow');

let currentTurn;

const turnIndicator = () => {
    let indicator;
    if(document.getElementById('turnIndicator') === null){
        indicator = document.createElement('p');
        gameWindow.appendChild(indicator);
        indicator.id = 'turnIndicator';
    } else {
        indicator = document.getElementById('turnIndicator');
    }
    indicator.textContent = `Turn of: ${currentTurn.name}`;
};

const fieldPress = (e) =>{
    let i = e.target.dataset.id;
    if (board.setSymbol(currentTurn, i)){
        renderer.updateBoard();
        if(checkState()){
        if (currentTurn === player.getPlayer(0)){
            currentTurn = player.getPlayer(1);
        } else {
            currentTurn = player.getPlayer(0);
        } 
        turnIndicator();
    }
    }
}

const displayResult = (state) =>{
    if(state === 'Draw'){
        setTimeout(() =>{
            alert('The game is draw!');
            nextGame();
        }, 0)
    } else if(state !== undefined) {
        setTimeout(()=>{
            alert(state + " wins!");
            nextGame();
        }, 0)
    }
}

const checkState = () =>{

    const b = board.getBoard();

    for(let i = 0; i<8; i += 3){
        if ((b[i]!==undefined)&&((b[i] === b[i+1])&&(b[i+1] === b[i+2]))){
            displayResult(b[i].name);
            return;
        }}

    for(let i=0; i<3; i++){
        if ((b[i]!==undefined)&&((b[i] === b[i+3])&&(b[i+3] === b[i+6]))){
            displayResult(b[i].name);
            return;
        }}

    if((b[4]!==undefined)&&(((b[0] === b[4])&&(b[4] === b[8]))||((b[2] === b[4])&&(b[4] === b[6])))){
        displayResult(b[4].name);
        return; 
    }

    if(b.length === 9){
        let full = true;
        for(let i=0; i<9; i++){
            if (b[i] === undefined){
                full = false;
            }
        }
        if(full){
            displayResult("Draw");
            return;
        } 
    }
    return true;
};

const prepareField = () => {
    const fields = document.querySelectorAll('#gameBoard > .field');
    fields.forEach(function (field) {
            field.addEventListener('mousedown', (e) => fieldPress(e));
        });
        turnIndicator();
}

const gameStart = () => {
currentTurn = (player.getPlayer(0));
prepareField();
}

export const newGame = () => {
        board.clearBoard();
        renderer.newBoard();
        player.makePlayers();
        gameStart();
    }

const nextGame = () =>{
    board.clearBoard();
    renderer.newBoard();
    gameStart();
}