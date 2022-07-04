import renderer from "./renderer.mjs";
import { newGame } from "./game.mjs";

const playerWindow = document.getElementById('playerWindow');

const button = document.createElement('button');
button.id = "newGame";

renderer.newBoard();

button.classList = 'newgame';
button.innerText = 'NEW GAME';
playerWindow.appendChild(button);

button.addEventListener('mousedown', () => newGame());