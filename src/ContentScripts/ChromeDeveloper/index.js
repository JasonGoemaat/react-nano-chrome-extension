// for: https://developer.chrome.com/extensions/getstarted
// see: https://developer.chrome.com/extensions/content_scripts

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const id = `content-${chrome.runtime.id}`;
if (!document.getElementById(id)) {
    let div = document.createElement("div");
    div.setAttribute("id", id);
    div.classList.add('content-script-host');
    document.body.prepend(div);
}
ReactDOM.render(<App />, document.getElementById(id));

/*

This is injected declaratively by specifying it in 'manifest.json':

     "content_scripts": [
       {
         "matches": ["http://*.nytimes.com/*"],
         "css": ["myStyles.css"],
         "js": ["contentScript.js"]
       }
     ],

To inject programatically, you need the 'activeTab' permission:

    "permissions": [
      "activeTab"
    ],
 
You can inject code directly:

    chrome.runtime.onMessage.addListener(
        function(message, callback) {
          if (message == “changeColor”){
            chrome.tabs.executeScript({
              code: 'document.body.style.backgroundColor="orange"'
            });
          }
    });

Or inject a file:

    chrome.runtime.onMessage.addListener(
        function(message, callback) {
          if (message == “runContentScript”){
            chrome.tabs.executeScript({
              file: 'contentScript.js'
            });
          }
    });

*/