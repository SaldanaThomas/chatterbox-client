// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  _data: {},

  toggleStatus: function(user) {
    if (!Friends._data[user]) {
      Friends._data[user] = true;
      return;
    }
    Friends._data[user] = false;
  },

  check: function(user) {
    return Friends._data[user];
  },

  returnFriends: function() {
    return Friends._data;
  }
};