class Player{
    constructor(name){
        this.name = name;
    }
}
export const makePlayer = (name) => {
return new Player(name);
}
