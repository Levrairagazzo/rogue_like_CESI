class Enemy {
    constructor(health, damage){
        this.health = random (0, 100);
        this.damage = random (0, 100);
    }
    attack(player){
        player.health -= this.damage;
    }
}