import React from "react";
import Typewriter from "typewriter-effect";
import "../App.scss";
let textIsTypeing;

let textDiv = document.createElement("span");
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

// export function typeText(inputTxt) {
//   document.getElementById("maskTextDiv").append(textDiv);

//   (function addLetter() {
//     new Typewriter("#typewriter", {
//       strings: inputTxt,
//       autoStart: true,
//     });
//     console.log(inputTxt);
//   })();

// return (
//   <textDiv>
//     <Typewriter
//       onInit={(typewriter) => {
//         typewriter
//           .typeString(inputTxt)
//           .callFunction(() => console.log("working"))
//           .start();
//       }}
//       // options={{
//       //   wrapperClassName: "maskTextDiv",
//       // }}
//     />
//   </textDiv>
// );
// }

export function clearText() {
  textDiv.innerHTML = "";
  textIsTypeing = false;
}
