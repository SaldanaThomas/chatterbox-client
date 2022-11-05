// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.$chats.click(function() {
      MessagesView.handleClick();
    });
  },

  render: function() {
    let messages = Messages.retrieveMessages();
    for (let message of messages) {
      MessagesView.renderMessage(message);
    }
  },

  renderMessage: function(message) {
    //need to fix MessagesView.render for line 23 to work
    // let $message = MessagesView.render(message);
    let $message = '<div>' + message + '</div>';
    MessagesView.$chats.prepend($message);
  },

  handleClick: function(event) {
    //add friend
    // let user = event.currentTarget.innnerText;
    // Friends.toggleFriend(user);
  }

};