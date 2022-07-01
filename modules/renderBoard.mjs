import board from "./gameBoard.mjs";
const boardDisplay = document.getElementById("gameBoard");

const renderer = {
    render(player1, player2){
        const currentBoard = board.getBoard();
        for(let i = 0; i<9; i++){
            const field = document.createElement("img")
                switch(currentBoard[i]){
                    case(undefined):
                        field.src = './images/blank.gif';
                        break;
                    case(player1):
                        field.src = './images/cross.svg';
                        break;
                    case(player2):
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
        }
    }

    export default renderer;
