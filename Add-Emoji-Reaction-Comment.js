// ==UserScript==
// @name         Add Emoji Reaction Comment
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*docs.google.*/document/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant GM_setValue
// @grant GM_registerMenuCommand
// ==/UserScript==

console.log('ok, tamper started!');

// Create a new comment element
var commentElement = document.createElement("div");
commentElement.className = "docs-comment docs-reaction";
commentElement.textContent = "👍";

// Store the comment element in the Tampermonkey storage
GM_setValue("emojiReaction", commentElement);

document.addEventListener("keydown", function (key) {
	
	
	if (key.altKey && key.code === "KeyS") {
		// Get the comment element from the Tampermonkey storage
		var commentElement = GM_getValue("emojiReaction");

		// Check if the comment element exists and the document is fully loaded
		if (commentElement && document.readyState === "complete") {
			// Inject the comment element into the document
			document.querySelector(".docs-editor-container").appendChild(commentElement);
		}
	}
  
	// hl neon green
	if (key.altKey  &&  key.code === "KeyG") {
		var buttonbg = document.getElementById("bgColorButton");

		callMouseEvent(buttonbg);
		setTimeout(function(){
			var color_choice = document.getElementById("docs-material-colorpalette-cell-104");
			console.log("clickbutton wait 2sec");
			callMouseEvent(color_choice);
		}, 1);
	}
	
	// Remove BG color--no idea why it needs two callMouseEvents
	if (key.altKey && key.code === "KeyR") {
		var buttonbg = document.getElementById("bgColorButton");

		callMouseEvent(buttonbg);
		setTimeout(function(){
			var color_choice = document.getElementsByClassName("goog-menuitem colormenuitems-no-color")[0];
			console.log(color_choice + "clickbutton wait 2sec");
			callMouseEvent(color_choice);
			callMouseEvent(color_choice);
		}, 1);
	}
  
});

//call each mouse event
function callMouseEvent(button){
    triggerMouseEvent (button, "mouseover");
    triggerMouseEvent (button, "mousedown");
    triggerMouseEvent (button, "mouseup");
}

// send mouse even
function triggerMouseEvent (node, eventType) {
    var eventObj        = document.createEvent('MouseEvents');
    eventObj.initEvent (eventType, true, true);
    node.dispatchEvent   (eventObj);
}