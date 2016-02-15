
var messageArea = document.getElementById('output');
var userText = document.getElementById('userTextInput');
var clearButton = document.getElementById('clearButton');
var output = document.getElementById('output');

//EVENT LISTENERS
clearButton.addEventListener('click', clearButtonFunc);
clearButton.addEventListener('click', check);
document.addEventListener('keyup', getEnter)


function getEnter(e) {
	if (e.which === 13) {
	console.log("enter");

	var currentMessage = Chatty.addMessage(userText.value);
	var newArray = Chatty.getMessage();
	console.log(newArray);

	var msgOutput = document.getElementById('messageOutput'); 

	msgOutput.innerHTML = newArray;
	console.log(userText.value);
	console.log(output);
	// console.log(output.appendChild(userText.value));		

	userText.value = "";
	};
}

function check() {
// console.log(messageArea.innerHTML.indexOf(0));	
	if (messageArea.innerHTML.indexOf(0) < 0) {
		clearButton.disabled = true;
		console.log("disabled");
	}
}

function clearButtonFunc() {
	console.log("messageArea", messageArea);
	messageArea.innerHTML = "";
}











