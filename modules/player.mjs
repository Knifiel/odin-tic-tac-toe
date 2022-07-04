class Player{
    constructor(name){
        this.name = name;
    }
}
class AiPlayer extends Player{
    constructor(name){
        super(name);
        this.isAi = true;
    }
}

const players = [];

const playerWindow = document.getElementById('playerWindow');

function makePlayerDisplay() {
    const button = document.getElementById('newGame');
    const buttonAi = document.getElementById('newGameAi');
    playerWindow.innerHTML = '';
    const player1label = document.createElement('p');
    const player2label = document.createElement('p');
    const player1name = document.createElement('p');
    const player2name = document.createElement('p');
    player1label.innerText = "Player 1:";
    player2label.innerText = "Player 2:";
    player1name.innerText = player.getPlayer(0).name;
    player2name.innerText = player.getPlayer(1).name;

    playerWindow.classList = "players";
    playerWindow.appendChild(player1label);
    playerWindow.appendChild(player2label);
    playerWindow.appendChild(player1name);
    playerWindow.appendChild(player2name);

    playerWindow.appendChild(button);
    playerWindow.appendChild(buttonAi);
}

function promptPlayer(i) {
    let name = prompt(`Enter player ${i + 1} name`, `Player ${i + 1}`);
    if (name === "") {
        promptPlayer(i);
    } else {
        makePlayer(name);
    }
}
function makePlayer(name) {
    players.push(new Player(name));
    console.log(players);
}
function enableAi() {
    players.push(new AiPlayer('Ai'));
    console.log(players);
}

const player ={
        getPlayer(i){
            return players[i];
        },

        clearPlayers(){
            players.length = 0;
            console.log(players);
        },

        makePlayers(){
            player.clearPlayers();
            promptPlayer(0);
            promptPlayer(1);
            makePlayerDisplay();
        },

        makePlayersAi(){
            player.clearPlayers();
            promptPlayer(0);
            enableAi();
            makePlayerDisplay();
        }
}

export default player;