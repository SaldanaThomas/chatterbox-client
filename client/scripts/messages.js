// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.
var Messages = {
  _data: [],

  addFilteredMessages: function(messages) {
    for (var i = 0; i < messages.length; i++) {
      messages[i].roomname = messages[i].roomname || 'General';
      if (!messages[i].username || !messages[i].text) {
        continue;
      }
      Messages._data.push(messages[i]);
      Rooms.addMessageToRoom(messages[i]);
    }
    console.log(Messages.retrieveMessages());
    console.log(Rooms.retrieveRoomNames());
    MessagesView.render();
    RoomsView.render();
  },

  retrieveMessages: function(message) {
    return Messages._data;
  },

  interactWithMessage: function(message) {
    //add friends by clicking message username
    //add clicl event???
  }
};