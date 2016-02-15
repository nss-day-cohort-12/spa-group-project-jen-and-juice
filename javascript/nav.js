
var messageArea = document.getElementById('output');
var userText = document.getElementById('userTextInput');
var clearButton = document.getElementById('clearButton');
var output = document.getElementById('output');
var msg1 = document.getElementById('meg--0');


clearButton.addEventListener('click', clearButtonFunc);
clearButton.addEventListener('click', check);
userText.addEventListener('keyup', userTextFunc);
document.addEventListener('keyup', getEnter)

function userTextFunc() {
	console.log("user typing...", userText.value);
}

function getEnter(e) {
	if (e.which == 13) {
	console.log("enter");
	console.log(event.target.value);
	console.log(output.childNodes);

	
	}
}

function check() {
// console.log(messageArea.innerHTML.indexOf(0));	
	if (messageArea.innerHTML.indexOf(0) < 0) {
		clearButton.disabled = true;
		console.log("disabled");
	}
}

function clearButtonFunc() {
	console.log("messageArea", userText.value);
	messageArea.innerHTML = "";
}











