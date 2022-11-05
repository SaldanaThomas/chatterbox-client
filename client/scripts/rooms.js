// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {
  _data: {General: []},

  addMessageToRoom: function(message) {
    Rooms._data[message.roomname] = Rooms._data[message.roomname] || [];
    Rooms._data[message.roomname].push(message);
  },

  addRoom: function(room) {
    //still creating duplicate rooms
    Rooms._data[room] = Rooms._data[room] || room;
  },

  retrieveRoomData: function(room) {
    return Rooms._data[room];
  },

  retrieveRoomNames: function() {
    return Object.keys(Rooms._data);
  }
};