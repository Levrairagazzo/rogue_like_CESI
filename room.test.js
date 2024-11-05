const Room = require('./room');  // Import Room correctly

test('Length of the array types', () => {
    const currentRoom = new Room();
    expect(currentRoom.types.length).toBe(3);
});
