var Chatty = (function (prevChatty) {
	var activeMessage = [];
	var counter = 5;

	prevChatty.addMessage = function(message) {
		activeMessage.unshift(message);
		// console.log("activeMessage", activeMessage);

		newArray = activeMessage.slice(0,1);
		// console.log("newArray", newArray);
			// console.log(newArray);
			// console.log(counter);

		DomBuilder(newArray, counter);	
		counter++;
	};

	prevChatty.getMessage = function() {
		return activeMessage;
	}

	return prevChatty;

})(Chatty || {});





