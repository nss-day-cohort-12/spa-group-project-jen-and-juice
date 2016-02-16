
//CACHE DOM
var msgOutput = document.getElementById('messageOutput'); 
var clearButton = document.getElementById('clearButton');
var messageContainer = document.getElementById('messageContainer');
var msgOutput = document.getElementById('messageOutput'); 
var userText = document.getElementById('userTextInput');

var dark = document.getElementById('checkDarkTheme');
var text = document.getElementById('checkLargeText');


//EVENT LISTENERS
clearButton.addEventListener('click', clearButtonFunc);
clearButton.addEventListener('click', check);
document.querySelector("div").addEventListener("click", Chatty.deleteMessage);
dark.addEventListener('click', darkTheme);
text.addEventListener('click', largeText);
document.addEventListener('keyup', add)


function add(e) {
	if (e.which === 13) {
	// console.log("enter");
		var currentMessage = Chatty.addMessage(userText.value);
		var array = Chatty.getMessage();
			// console.log(array);
			// console.log(userText.value);
			// console.log(output);	
		userText.value = "";
		readyClearButton();
	};
}

function readyClearButton() {
	// console.log("hello mr uncheck");
		clearButton.disabled = false;
		clearButton.classList.remove('disabled');
}

function check() {
	// console.log(clearMessage.innerHTML.indexOf(0));	
	if (messageContainer.innerHTML.indexOf(0) < 0) {
		clearButton.disabled = true;
		clearButton.classList.add('disabled');
	}
}

function clearButtonFunc() {
	output.innerHTML = "";
}

function darkTheme() {
	console.log("dark");
	messageContainer.classList.toggle('dark');
}
function largeText() {
	console.log("theme");
	output.classList.toggle('largeText')
}





