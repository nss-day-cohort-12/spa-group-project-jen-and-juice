var Chatty = (function (prevChatty) {

	prevChatty.deleteMessage = function(event) {
		
	// Handle the click event on any DOM element with a certain class
  	if (event.target.className === "deleteButton") {
    console.log(event.target.parentNode);
    event.target.parentNode.remove();
  }
	}

	return prevChatty;

})(Chatty || {});





