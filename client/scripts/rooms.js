// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {
  _data: {General: []},
  selectedRoom: 'General',

  addMessageToRoom: function(message) {
    Rooms._data[message.roomname] = Rooms._data[message.roomname] || [];
    Rooms._data[message.roomname].push(message);
  },

  add: function(room) {
    Rooms._data[room] = [];
  },

  retrieveRoomData: function(room) {
    return Rooms._data[room];
  },

  retrieveRoomNames: function() {
    return Object.keys(Rooms._data);
  },

  changeRoom: function(room) {

  }
};