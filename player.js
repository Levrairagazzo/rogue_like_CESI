const { is } = require("@babel/types");

class Player {
    
    constructor(name) {
        this.health = 100;
        this.damage = 10;
        this.name = name;
        this.alive = true;
    }

    healthPack(){
        this.health += 20;
    }

    damageTaken(enemyDamage){
        this.health -= enemyDamage;
        this.alive = this.playerIsAlive();
    }

    improveDamage(damageImprovement)
    {
        this.damage += damageImprovement;
    }

    playerIsAlive(){
        if(this.health > 0)
           return true;
        return false;
    }
  
}
module.exports = Player;