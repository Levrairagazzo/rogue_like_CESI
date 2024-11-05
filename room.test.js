const Room = require('./room');  // Import Room correctly
const Player = require('./player');  // Import Player correctly

test('Length of the array types', () => {
    const currentRoom = new Room();
    expect(currentRoom.types.length).toBe(3);
});

test('Type is ennemy', () => {  
    const currentRoom = new Room();
    currentRoom.changeType('ennemy');
    expect(currentRoom.type).toBe('ennemy');
});
