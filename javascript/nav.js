
var userText = document.getElementById('userTextInput');
var clearButton = document.getElementById('clearButton');
var msgOutput = document.getElementById('messageOutput'); 

//EVENT LISTENERS
clearButton.addEventListener('click', clearButtonFunc);
clearButton.addEventListener('click', check);
document.addEventListener('keyup', getEnter)
var counter = 5;

function getEnter(e) {
	if (e.which === 13) {
	// console.log("enter");

		var currentMessage = Chatty.addMessage(userText.value);

		var array = Chatty.getMessage();
			// console.log(array);

		newArray = array.slice(0,1);
			// console.log(newArray);
			// console.log(counter);
			
		var addMsg= "";
		addMsg += `<div id="messsage--${counter}" class="newMsg">`;
		addMsg += `<button id="button--${counter}" class="deleteButton">Delete</button>`;
		addMsg += `<p>${newArray}</p>`;
		addMsg += `</div>`;
		console.log(addMsg);
		msgOutput.innerHTML += addMsg;	
		counter++;
		
			// console.log(userText.value);
			// console.log(output);	

		userText.value = "";
		readyClearButton();
	};
}


function readyClearButton() {
	console.log("hello mr uncheck");
		clearButton.disabled = false;
}

function check() {
	// console.log(clearMessage.innerHTML.indexOf(0));	
	if (clearMessage.innerHTML.indexOf(0) < 0) {
		clearButton.disabled = true;
	}
}

function clearButtonFunc() {
	console.log("messageArea", msgOutput);
	msgOutput.innerHTML = "";
	output.innerHTML = "";

}





