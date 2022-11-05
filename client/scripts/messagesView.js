// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
  },

  render: function () {
    let messages = Messages.retrieveMessages();
    for (let message in messages) {
      MessagesView.renderMessage(messages[message]);
    }
  },

  renderMessage: function (message) {
    let $message = $(MessageView.render(message));

    $message.click(function() {
      let user = message.username;
      MessagesView.handleClick(user);
    });
    MessagesView.$chats.prepend($message);
  },

  handleClick: function (user) {
    Friends.toggleStatus(user);
  }

};