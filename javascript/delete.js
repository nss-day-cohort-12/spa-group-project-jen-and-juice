var Chatty = (function (prevChatty) {

	prevChatty.deleteMessage = function(event) {
		
		// Handle the click event on any DOM element with a certain class
	  	if (event.target.className === "deleteButton") {
	    	event.target.parentNode.remove();
		   		// console.log(event.target.parentNode);
	  	}
	}

	return prevChatty;

})(Chatty || {});





