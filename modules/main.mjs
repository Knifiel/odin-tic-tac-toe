import board from "./gameBoard.mjs";
import renderer from "./renderBoard.mjs";
import { makePlayer } from "./Players.js";

const player1 = makePlayer('Josh');
const player2 = makePlayer('Bob');

console.log(board.getBoard());
console.log (board.setSymbol(player1, 1));
board.setSymbol(player2, 6);
renderer.render(player1, player2);
console.log(board.getBoard().toString());
console.log(player1.name);
console.log(player2);