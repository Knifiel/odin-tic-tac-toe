const gameBoard = [];

const isTaken = (i) => {
    gameBoard[i] ? true : false;
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

};

    export default board;