class Room {
    types = ['ennemy', 'health', 'boss'];
    
    constructor() {
        this.type = this.types[Math.floor(Math.random() * this.types.length)];
    }
    changeType(type) {
        if (this.types.includes(type)) {
            this.type = type;
        }
        this.type = type;
    }

   
    enterRoom(player) {
        console.log('You have entered a room of type ' + this.type);
        if (this.type === 'ennemy') {
            player.health -= Math.floor(Math.random() * (20 - 5 + 1)) + 5;
            console.log('You have been attacked by an enemy');
            console.log(player.name + ' has ' + player.health + ' health left');
        } else if (this.type === 'boss') {
            player.health -= Math.floor(Math.random() * (70 - 20 + 1)) + 20;
            console.log('You have been attacked by a boss');
            console.log(player.name + ' has ' + player.health + ' health left');
        } else if (this.type === 'health') {
            player.health += 20;
            console.log('You have found a health pack');
            console.log(player.name + ' has ' + player.health + ' health left');
        }
    }
}

module.exports = Room;