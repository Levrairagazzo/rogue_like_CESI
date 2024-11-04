class Player {
  constructor(name) {
    this.health = 100;
    this.damage = 10;
  }

  attack(enemy) {
    enemy.health -= this.damage;
  }
  
}