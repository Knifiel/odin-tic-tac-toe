import board from "./gameBoard.mjs";
import player from "./player.mjs";
const boardDisplay = document.getElementById("gameBoard");

const renderer = {
    newBoard(){
        boardDisplay.innerHTML = '';
        const currentBoard = board.getBoard();
        console.log(currentBoard);
        for(let i = 0; i<9; i++){
            const field = document.createElement("img");
                switch(currentBoard[i]){
                    case(undefined):
                        field.src = './images/blank.gif';
                        break;
                    case(player.getPlayer(0)):
                        field.src = './images/cross.svg';
                        break;
                    case(player.getPlayer(1)):
                        field.src = './images/circle.svg';
                        break;
                    default:
                        field.src = './images/blank.gif';
                        break;
                }
            field.classList.add('field');
            field.dataset.id = i;
            boardDisplay.appendChild(field);
            }
        },

    updateBoard(){
        const currentBoard = board.getBoard();
        const boardNodes = document.querySelectorAll('.field');
        for(let i = 0; i<9; i++){
                switch(currentBoard[i]){
                    case(undefined):
                        boardNodes[i].src = './images/blank.gif';
                        break;
                    case(player.getPlayer(0)):
                        boardNodes[i].src = './images/cross.svg';
                        break;
                    case(player.getPlayer(1)):
                        boardNodes[i].src = './images/circle.svg';
                        break;
                    default:
                        boardNodes[i].src = './images/blank.gif';
                        break;
                                        }
                    }
                }
}    
    export default renderer;

