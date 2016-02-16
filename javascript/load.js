var Chatty= (function () {
	var messageArray= [];
	return {
		loadMessages: function(callback){
			var loader = new XMLHttpRequest();// Create an XHR object
			loader.addEventListener("load", function () {
				// console.log(this.responseText);
				var data = JSON.parse(this.responseText);
				// console.log("data.categories: ", data.categories);
				messageArray = data.message;
				// console.log("messageArray", messageArray);
				callback(messageArray);
			});
		loader.open("GET", "json/msgs.json");
		loader.send();

		},
	}
})();

function writeToDOM(callback) {
	var output = document.getElementById("output"); 
	var counter= 0;
	console.log(callback);
	callback.forEach(function(object){
		var currentMessage = object.msg;
		var msgString= "";
		msgString += `<div id="messsage--${counter}" class="msg">`;
		msgString += `<button id="button--${counter}" class="deleteButton">Delete</button>`;
		msgString += `<p>${currentMessage}</p>`;
		msgString += `</div>`;
		output.innerHTML+= msgString;	
		counter ++;
		});	
}
Chatty.loadMessages(writeToDOM);









