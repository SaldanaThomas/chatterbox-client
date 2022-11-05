// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.click(function() {
      RoomsView.handleClick();
    });
  },

  render: function() {
    let rooms = Rooms.retrieveRoomNames();
    RoomsView.$select.html('');
    for (let room of rooms) {
      RoomsView.renderRoom(room);
    }
  },

  renderRoom: function(room) {
    //$room =
    RoomsView.$select.append('<option>' + room + '</option>');
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    //clear msg feed

    //rerender room obly
  },

  handleClick: function() {
    //check user input for attacks???
    let room = prompt('Enter room name: ');
    if (!Rooms._data[room]) {
      Rooms.add(room);
      RoomsView.renderRoom(room);
    }
  }
};
