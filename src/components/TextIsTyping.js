import "../App.scss";
let textIsTypeing;

let textDiv = document.createElement("span");

//  textDiv = document.getElementById("maskTextDiv");
// let textDiv;
export function typeText(inputTxt) {
  textDiv.innerHTML = "";

  document.getElementById("maskTextDiv").append(textDiv);
  textIsTypeing = true;
  let i = 0;
  (function addLetter() {
    if (textIsTypeing) {
      textDiv.innerHTML += inputTxt.charAt(i);
      i++;
      if (i < inputTxt.length) {
        setTimeout(addLetter, 70);
      }
    }
  })();
}
export function clearText() {
  textDiv.innerHTML = "";
  textIsTypeing = false;
}
