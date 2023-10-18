// to install this script: install the tampermonkey extension. Then click on "raw" on this github page.

// *perso note:
    //to install or to send update:
    // 1/ edit must be done on github (cf. the url in the tab settings).
    // 2/ Edit/update the script (using the edit github button) + increase the version (or it will ask to reinstall in the next step)
        // (don't need to increase the version if the change are just for myself: just reinstall it to keep the version)
    // 3/ click on RAW (it will show the changes).
    // 4/ Click Update (if needed refresh the dashboard page)

    // last update: 2020_02_27. 
    // New features: 
    // 2020_02_27: color in red the current title in the outline panel
   


// ==UserScript==
// @name Google Docs Tweaks
// @namespace some_google_doc_shortcuts_to_change_font_highlight
// @version 1.0.5
// @author Willi
// @description some google doc shortcuts to change the font and highlights (help needed for font size!). It also hide the page break dotted lines.

// @include      https://*docs.google.*/document/*
// @require    http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js

// add a style sheet to the page (needed to tweak CSS) https://stackoverflow.com/a/19392142/1486850
// @grant    GM_addStyle

// ==/UserScript==

console.log('ok, tamperstarted !');

// hide the page break doted line:
// https://stackoverflow.com/a/52870899/3154274
GM_addStyle ( `
.kix-page-compact::before {
        border-top: none;
    }
// color in red current title in outline
.outline-refresh .location-indicator-highlight.navigation-item,  .outline-refresh .location-indicator-highlight.navigation-item.goog-button-hover {
color: rgb(255, 0, 0);
}
` );


 // listen for key shorcuts on the text part of google gocs
//	● Tuto - sources:
// 		○ for iframe https://stackoverflow.com/a/46217408/3154274
// 		○ for switch https://stackoverflow.com/q/13362028/3154274
// 		○ combinaison of key  https://stackoverflow.com/a/37559790/3154274
// 		○ dispatchEvent https://stackoverflow.com/a/33887557/3154274

// 		○ for dispatch :
//		    https://jsfiddle.net/6vyL98mz/33/
//    		https://jsfiddle.net/ox2La621/1/

var editingIFrame = $('iframe.docs-texteventtarget-iframe')[0];
if (editingIFrame) {
    editingIFrame.contentDocument.addEventListener("keydown", dispatchkeyboard, false);
}


// match the key with the action
function dispatchkeyboard(key) {
    if (key.ctrlKey) {
        return;
    }

    //--------------- background color

    // Remove BG color--no idea why it needs two callMouseEvents
    if (key.altKey  &&  key.code === "KeyR") {
        var buttonbg = document.getElementById("bgColorButton");

        callMouseEvent(buttonbg);
        setTimeout(function(){
            var color_choice = document.getElementsByClassName("goog-menuitem colormenuitems-no-color")[0];
            console.log(color_choice);
            console.log("clickbutton wait 2sec");
            callMouseEvent(color_choice);
            callMouseEvent(color_choice);
        }, 1);
    }

    // hl light purple 3
    if (key.altKey  &&  key.code === "KeyB") {
        var buttonbg = document.getElementById("bgColorButton");

        callMouseEvent(buttonbg);
        setTimeout(function(){
            var color_choice = document.getElementById("docs-material-colorpalette-cell-118");
            console.log("clickbutton wait 2sec");
            callMouseEvent(color_choice);
        }, 1);
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

    // hl light green 3
    if (key.altKey  &&  key.code === "KeyQ") {
        var buttonbg = document.getElementById("bgColorButton");

        callMouseEvent(buttonbg);
        setTimeout(function(){
            var color_choice = document.getElementById("docs-material-colorpalette-cell-114");
            console.log("clickbutton wait 2sec");
            callMouseEvent(color_choice);
        }, 1);
    }
    
    //hl light cornflower blue 3
    if (key.altKey  &&  key.code === "KeyL") {
        var buttonbg = document.getElementById("bgColorButton");

        callMouseEvent(buttonbg);
        setTimeout(function(){
            var color_choice = document.getElementById("docs-material-colorpalette-cell-116");
            console.log("clickbutton wait 2sec");
            callMouseEvent(color_choice);
        }, 1);
    }
    
    //hl magenta
    if (key.altKey  &&  key.code === "KeyP") {
        var buttonbg = document.getElementById("bgColorButton");

        callMouseEvent(buttonbg);
        setTimeout(function(){
            var color_choice = document.getElementById("docs-material-colorpalette-cell-109");
            console.log("clickbutton wait 2sec");
            callMouseEvent(color_choice);
        }, 1);
    }

}// end of  dispatchkeyboard


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
