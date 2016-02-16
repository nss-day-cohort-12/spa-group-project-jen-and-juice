var Chatty = (function (prevChatty) {
	var activeMessage = [];

	prevChatty.addMessage = function(message) {
		activeMessage.unshift(message);
	}

	prevChatty.getMessage = function() {
		return activeMessage;
	}

	return prevChatty;

})(Chatty || {});





