import React from "react";
import "../App.scss";
// let textIsTypeing;

let textDiv = document.createElement("span");
let isTyping;

export function typeText(inputTxt, e) {
  textDiv.innerHTML = "";
  document.getElementById("maskTextDiv").append(textDiv);

  for (let span of document.querySelectorAll(".maskImgs")) {
    if (e.target.getAttribute("isTyping") === "true") {
      e.preventDefault();
      return false;
    }
    for (let others of document.querySelectorAll(".maskImgs")) {
      others.setAttribute("isTyping", "false");
    }

    span.setAttribute("isTyping", "true");
    let input = inputTxt.split("");
    let int = 0;

    function loop() {
      if (int < input.length && span.getAttribute("isTyping") === "true") {
        let string = input.join("").slice(0, int);
        setTimeout(() => {
          textDiv.innerHTML = string;
          int++;
          requestAnimationFrame(loop);
        }, 70);
      } else {
        span.setAttribute("isTyping", "false");
        isTyping = false;
      }
    }
    setTimeout(() => {
      loop();
    }, 100);
  }
}

// let i = 0;
// (function addLetter() {
//   if (textIsTypeing) {
//     textDiv.innerHTML += inputTxt.charAt(i);
//     i++;
//     if (i < inputTxt.length) {
//       setTimeout(addLetter, 70);
//     }
//     // textIsTypeing = fals;
//   }
// })();

export function clearText() {
  textDiv.innerHTML = "";
  isTyping = false;
}
