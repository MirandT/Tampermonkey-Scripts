// ==UserScript==
// @name        Google Doc Highlight Shortcuts
// @namespace   google_doc_highlight_shortcuts
// @description	New highlighter structure
// @version     1.0
// @author      Me
// @match	https://*docs.google.*/document/*
// @grant       GM_setValue
// @grant       GM_getValue
// ==/UserScript==

console.log('Script Google Doc Highlight Shortcuts Started!');

document.addEventListener("keydown", function (key) {
	if (key.ctrlKey) {
	        return;
	}

	// Create a new comment element
	var commentElement = document.createElement("div");
	commentElement.className = "docs-comment docs-reaction";

	// Set the comment element's text to the desired emoji
	commentElement.textContent = "👍";

	// Store the comment element in the Tampermonkey storage
	GM_setValue("emojiReaction", commentElement);

	// Click highlighter button
	callMouseEvent(document.getElementById("bgColorButton"));
	// Allow process time to click highlighter button
	setTimeout(function(){
		switch (key.altKey && key.code) {
			case "KeyL":
				// Select light cornflower blue 3 color
				callMouseEvent(document.getElementById("docs-material-colorpalette-cell-116"));
				break;
			case "KeyP":
				// Select magenta color
				callMouseEvent(document.getElementById("docs-material-colorpalette-cell-109"));
				break;
			case "KeyQ":
				// Select light green 3 color
				callMouseEvent(document.getElementById("docs-material-colorpalette-cell-114"));
				break;
			case "KeyG":
				// Select neon green color
				callMouseEvent(document.getElementById("docs-material-colorpalette-cell-104"));
				break;
			case "KeyB":
				// Select light purple 3 color
				callMouseEvent(document.getElementById("docs-material-colorpalette-cell-118"));
				break;
			case "KeyR":
				// Select remove color
				callMouseEvent(document.getElementsByClassName("goog-menuitem colormenuitems-no-color")[0]);
				break;
			case "KeyS":
				console.log("Start emoji comment 2.0");
				// Get the comment element from the Tampermonkey storage
				var getCommentElement = GM_getValue("emojiReaction");
				// Inject the comment element into the document
				document.querySelector(".docs-editor-container").appendChild(getCommentElement);
				console.log("End emoji comment");
				break;
		}
	}, 1);
});
//call each mouse event
function callMouseEvent(button){
    triggerMouseEvent (button, "mouseover");
    triggerMouseEvent (button, "mousedown");
    triggerMouseEvent (button, "mouseup");
}

// send mouse even
function triggerMouseEvent (node, eventType) {
    var eventObj = document.createEvent('MouseEvents');
    eventObj.initEvent (eventType, true, true);
    node.dispatchEvent (eventObj);
}
