var Chatty= (function () {
	var messageArray= [];
	return {
		loadMessages: function(callback){

			$.ajax({
				url:"json/msgs.json"
			}).done(function(data) {

				console.log("data",data.message);
				messageArray = data.message;
				callback(messageArray);
			})
		},
	}
})();

function DomBuilder(currentMessage, counter) {
		var msgString= "";
		msgString += `<div id="messsage--${counter}" class="msg">`;
		msgString += 	`<button id="button--${counter}" class="deleteButton">Delete</button>`;
		msgString += 	`<button id="button--${counter}" class="editButton">Edit</button>`;
		msgString += 	`<p class="messageClass">${currentMessage}</p>`;
		msgString += `</div>`;
		$("#output").append(msgString);	
}
var clickedMsg;

$(document).on("click", ".editButton", function() {
	
	$("#editTextInput").val("");
	$("#userTextInput").toggle();
	$("#editTextInput").toggleClass("hidden");
	$("#editTextInput").focus();

	clickedMsg = $(event.target).parent();

	$("#editTextInput").keyup(function() {
		
		// console.log("clickedMsg", $(clickedMsg).children(".messageClass").html());
	"clickedMsg", $(clickedMsg).children(".messageClass").html(($("#editTextInput").val()));
	})
})

function writeToDOM(callback) {
	// var output = document.getElementById("output"); 
	var counter= 0;
		// console.log(callback);
	callback.forEach(function(object){
		var currentMessage = object.msg;
		DomBuilder(currentMessage,counter);
		counter ++;
	});	
}
Chatty.loadMessages(writeToDOM);









