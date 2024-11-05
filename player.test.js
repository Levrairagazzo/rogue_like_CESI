const Player = require('./player');

test('Player health is 100', () => {
    const player = new Player('Bob');
    expect(player.health).toBe(100);
})
test('Player damage is 10', () => {
    const player = new Player('Bob');
    expect(player.damage).toBe(10);
})
test('Player name is Bob', () => {
    const player = new Player('Bob');
    expect(player.name).toBe('Bob');
})
test('Player damage increased by 20', () => {
    const player = new Player('Bob');
    const currentDamage = player.damage;
    player.improveDamage(20);
    expect(player.damage).toBe(currentDamage + 20);
})
test('Player health increased by 20', () => {
    const player = new Player('Bob');
    const currentHealth = player.health;
    player.healthPack();
    expect(player.health).toBe(currentHealth + 20);
})
test('Player is dead', () => {
    const player = new Player('Bob');
    player.health = 0;
    player.alive = player.playerIsAlive();
    expect(player.alive).toBe(false);
})