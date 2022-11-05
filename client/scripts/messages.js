// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.
var Messages = {
  _data: {},

  addFilteredMessages: function(messages) {
    console.log(messages);
    for (var i = 0; i < messages.length; i++) {
      messages[i].roomname = messages[i].roomname || 'General';
      if (!messages[i].username || !messages[i].text) {
        continue;
      }
      if (!Messages._data[messages[i].message_id]) {
        Messages._data[messages[i].message_id] = messages[i];
      }
      Rooms.addMessageToRoom(messages[i]);
    }
    MessagesView.render();
    RoomsView.render();
  },

  retrieveMessages: function(message) {
    return Messages._data;
  },
};