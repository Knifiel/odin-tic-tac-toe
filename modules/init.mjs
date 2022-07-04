import player from "./player.mjs";
import renderer from "./renderer.mjs";
import game from "./game.mjs";
import board from "./gameBoard.mjs";

const playerWindow = document.getElementById('playerWindow');

const button = document.createElement('button');

renderer.newBoard();

button.classList = 'newgame';
button.innerText = 'NEW GAME';
playerWindow.appendChild(button);

button.addEventListener('mousedown', () => newGame());

const newGame = () => {
    board.clearBoard();
    renderer.newBoard();
    makePlayers();
    game.gameStart();
}

const makePlayers = () => {
    player.clearPlayers();
    promptPlayer(0);
    promptPlayer(1);
    makePlayerDisplay();
}

const promptPlayer = (i) => {
    let name = prompt(`Enter player ${i+1} name`, `Player ${i+1}`);
    if (name === "" ){
        promptPlayer(i);
    } else {
        player.makePlayer(name);
    }
}

const makePlayerDisplay = () => {
    playerWindow.innerHTML = '';
    const player1label = document.createElement('p');
    const player2label = document.createElement('p');
    const player1name = document.createElement('p'); 
    const player2name = document.createElement('p');
    player1label.innerText = "Player 1:"
    player2label.innerText = "Player 2:"
    player1name.innerText = player.getPlayer(0).name;
    player2name.innerText = player.getPlayer(1).name;

    playerWindow.classList = "players";
    playerWindow.appendChild(player1label);
    playerWindow.appendChild(player2label);
    playerWindow.appendChild(player1name);
    playerWindow.appendChild(player2name);

    playerWindow.appendChild(button);
}