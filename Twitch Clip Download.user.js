// ==UserScript==
// @name         Twitch Clip Download Enabler
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add Button that allows for right clicking, save as video.
// @author       You
// @match        https://clips.twitch.tv/*
// @grant        none
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==

(function() {
  window.addEventListener("load", () => {
  addButton("Remove");
  });

  //Adds Button onto page
  function addButton(text, onclick, cssObj) {
    cssObj = cssObj || {
      position: "absolute",
      top: "63px",
      right: "50%",
      "z-index": 3,
      fontWeight: "600",
      fontSize: "14px",
      backgroundColor: "#7d5bbe",
      color: "#faf9fa",
      border: "none",
      padding: "10px 20px"
    };
    let button = document.createElement("button"),
      btnStyle = button.style;
    document.body.appendChild(button);
    button.innerHTML = text;
    // Setting function for button when it is clicked.
    button.onclick = selectReadFn;
    Object.keys(cssObj).forEach(key => (btnStyle[key] = cssObj[key]));
    return button;
  }

  function selectReadFn() {
    //Removes overlay
    $('.player-overlay').remove();
    //Removal allows for save as
    $('.player-root').remove();
    //Button press indicater
    this.innerHTML += "!";
  }
})();