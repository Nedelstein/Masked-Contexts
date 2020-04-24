import "../App.scss";
let textIsTypeing;

let textDiv = document.createElement("div");
textDiv.id = "maskTextDiv";
//  textDiv = document.getElementById("maskTextDiv");
// let textDiv;
export function typeText(inputTxt) {
  textIsTypeing = true;
  textDiv = "";
  let i = 0;
  (function addLetter() {
    if (textIsTypeing) {
      textDiv += inputTxt.charAt(i);
      i++;
      if (i < inputTxt.length) {
        setTimeout(addLetter, 70);
      }
    }
  })();
}
export function clearText() {
  textDiv = "";
  textIsTypeing = false;
}
