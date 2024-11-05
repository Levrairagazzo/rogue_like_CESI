class Room {
    types = ['ennemy', 'health', 'boss'];
    
    constructor() {
        this.type = this.types[Math.floor(Math.random() * this.types.length)];
    }

    enterRoom(player) {
        console.log('You have entered a room of type ' + this.type);
        if (this.type === 'ennemy') {
            player.health -= random(5, 20);
            console.log('You have been attacked by an enemy');
            console.log(player.name + ' has ' + player.health + ' health left');
        } else if (this.type === 'boss') {
            player.health -= random(20, 70);
            console.log('You have been attacked by a boss');
            console.log(player.name + ' has ' + player.health + ' health left');
        } else if (this.type === 'health') {
            player.health += 20;
            console.log('You have found a health pack');
            console.log(player.name + ' has ' + player.health + ' health left');
        }
    }
}

class Player {
    constructor(name) {
        this.health = 100;
        this.damage = 10;
        this.name = name;
    }

    attack(enemy) {
        enemy.health -= this.damage;
    }
}

// Function to generate a random number between min and max
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Async delay function for pauses
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let gameIsOver = false;
let player = new Player('Bob');

async function playGame(currentPlayer) {
    while (!gameIsOver) {
        await delay(1000);  // Pause for 1 second between each room
        let room = new Room();
        room.enterRoom(currentPlayer);

        if (currentPlayer.health <= 0) {
            gameIsOver = true;
            console.log('Game Over');
        }
    }
}

// playGame(player);

