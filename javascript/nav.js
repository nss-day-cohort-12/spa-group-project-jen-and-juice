$(document).ready(function() {

// UPON ENTER TAKE USER INPUT VALUE 
$('.userTextInput').keyup(function (e) {
	if (e.which === 13) {
	// console.log('enter");
		var currentMessage = Chatty.addMessage($('#userTextInput').val());
		var array = Chatty.getMessage();

		$('#userTextInput').val("");
		$('#clearButton').attr('enabled');
		$('#clearButton').removeClass('disabled');
	};
})
// TRIGGERS DELETE MESSAGE FUNCTION IN "delete.js"
$('div').click(Chatty.deleteMessage);

// CLEARS ALL MESSAGES
$('#clearButton').click(function () {
	$("#output").html("");
})

// DISABLES CLEAR ALL BUTTON 
$('#clearButton').click(function () {
	// console.log(clearMessage.innerHTML.indexOf(0));	
	if (messageContainer.innerHTML.indexOf(0) < 0) {
		$('#clearButton').attr('disabled');
		$('#clearButton').addClass('disabled');
	}
})

// TOGGLES LARGE TEXT
$('#checkLargeText').click (function () {
	$("#output").toggleClass('largeText');
})
// TOGGLES DARK THEME
$('#checkDarkTheme').click(function () {
	$('#messageContainer').toggleClass('dark');
})


})

