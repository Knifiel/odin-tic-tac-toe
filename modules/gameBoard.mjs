const gameBoard = [];

const isTaken = (i) => {
    console.log(gameBoard[i]);
    if (gameBoard[i] !== undefined){
        return true;
    }
};

const board = {
    getBoard(){
        return gameBoard;
    },
    
    setSymbol(player, i){
        if(!isTaken(i)){
            gameBoard[i] = player;
            return true;
        } else {
            return false;
        }
    },

    clearBoard(){
        gameBoard.length = 0;
        console.log('Board cleared. Empty board is:');
        console.table(gameBoard);
    }
};

    export default board;