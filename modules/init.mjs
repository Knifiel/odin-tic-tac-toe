import renderer from "./renderer.mjs";
import { newGame } from "./game.mjs";
import { newGameAi } from "./game.mjs";

const playerWindow = document.getElementById('playerWindow');

const button = document.createElement('button');
const buttonAi = document.createElement('button');

renderer.newBoard();

button.id = 'newGame';
buttonAi.id = "newGameAi";
buttonAi.innerText = "Vs. PC"
button.innerText = 'NEW GAME';
playerWindow.appendChild(button);
playerWindow.appendChild(buttonAi);

button.addEventListener('mousedown', () => newGame());
buttonAi.addEventListener('mousedown', () => newGameAi());