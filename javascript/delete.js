var Chatty = (function (prevChatty) {

	prevChatty.deleteMessage = function(event) {
	
	console.log("This is a tst");	
	// Handle the click event on any DOM element with a certain class
  	if (event.target.className === "deleteButton") {
    console.log(event.target.parentNode);
    event.target.parentNode.remove();
  }

	}

	return prevChatty;

})(Chatty || {});





