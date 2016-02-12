var Chatty= (function () {
	var messageArray= [];

	
	

	return {
		loadMessages: function(callback){
			var myRequest = new XMLHttpRequest();// Create an XHR object

			myRequest.addEventListener("load", function () {
				data = JSON.parse(this.responseText);
				messageArray = data.messsage;
				console.log(messageArray);

				callback(message);
			});
				
		myRequest.open("GET", "json/msgs.json");
		myRequest.send();
		}
	}
})();


// function executeThisCodeAfterFileIsLoaded () {
	
// }