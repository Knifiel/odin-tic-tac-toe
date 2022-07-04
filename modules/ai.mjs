import board from "./gameBoard.mjs";


function choseRandomSpace(){
    const currentBoard = board.getBoard();
    const freeSpaces = [];
    for(let i=0; i<9; i++){
        if (currentBoard[i] === undefined){
            freeSpaces.push(i);
        }
    }
    console.log('total free space is'+freeSpaces.length);

    let i = Math.random()*(freeSpaces.length);

    console.log('random number is');
    console.log(freeSpaces);
    return freeSpaces[Math.trunc(i)];
}

const ai = {
    turn(){
        const i = choseRandomSpace();
        console.log(i);
        return i;
    }
}

export default ai;
