
var msgOutput = document.getElementById('messageOutput'); 
var clearButton = document.getElementById('clearButton');

//EVENT LISTENERS
clearButton.addEventListener('click', clearButtonFunc);
clearButton.addEventListener('click', check);
document.querySelector("div").addEventListener("click", Chatty.deleteMessage);


document.addEventListener('keyup', getEnter)
var msgOutput = document.getElementById('messageOutput'); 
var userText = document.getElementById('userTextInput');


function getEnter(e) {
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





