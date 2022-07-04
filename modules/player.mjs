const players = [];

class Player{
    constructor(name){
        this.name = name;
    }
}

const player ={
        makePlayer(name){
            players.push(new Player(name));
            console.log(players);
        },

        getPlayer(i){
            return players[i];
        },

        clearPlayers(){
            players.length = 0;
            console.log(players);
        }
}

export default player;