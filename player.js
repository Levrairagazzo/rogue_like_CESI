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
// export { Player };