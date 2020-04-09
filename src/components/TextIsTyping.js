import "../App.scss";
let textIsTypeing;

let textDiv = document.getElementById("maskTextDiv");

export function typeText(inputTxt) {
  textIsTypeing = true;
  textDiv.innerHTML = "";
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
