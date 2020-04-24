import React, { useState } from "react";
// import * as PIXI from "pixi.js";
// import { Viewport } from "pixi-viewport";
// import { BulgePinchFilter, RGBSplitFilter } from "pixi-filters";

import Burger from "../components/Burger";
import Menu from "../components/Menu";

import SpeakText from "../components/SpeakText";
import { typeText, clearText } from "../components/TextIsTyping";

// import { dynamic, fixed, legacy, clearIntervalAsync } from "set-interval-async";
// const { setIntervalAsync: setIntervalAsyncD } = dynamic;
// const { setIntervalAsync: setIntervalAsyncF } = fixed;
// const { setIntervalAsync: setIntervalAsyncL } = legacy;
const json = require("../assets/masks_filenames_captions.json");

// let imgDiv;

let textDiv;

// function speakText(inputTxt) {
//   let synth = window.speechSynthesis;
//   let utterThis = new SpeechSynthesisUtterance(inputTxt);
//   let voices = synth.getVoices();
//   //   for (let i = 0; i < voices.length; i++) {
//   utterThis.voice = voices[7];
//   //   }
//   utterThis.rate = 0.6;
//   synth.speak(utterThis);
// }

// let textIsTypeing;
// function typeText(inputTxt) {
//   // console.log(inputTxt);
//   textIsTypeing = true;
//   textDiv = "";
//   let i = 0;
//   (function addLetter() {
//     if (textIsTypeing) {
//       textDiv += inputTxt.charAt(i);
//       i++;
//       if (i < inputTxt.length) {
//         setTimeout(addLetter, 70);
//       }
//     }
//   })();
// }
// function clearText() {
//   textDiv = "";
//   textIsTypeing = false;
// }

const MaskPageStyle = {
  display: "block",
  position: "fixed",
  width: "100%",
  height: "100%",
  backgroundColor: "#430354",
  overflow: "auto",
};

const ImgDivStyle = {
  display: "inline-block",
  // position: "fixed",
  alignItems: "center",
};

const textDivStyle = {
  position: "fixed",
};

const imgStyle = {
  margin: "10%",
  padding: "3%",
  width: "200px",
  height: "100px",
};

const IMG = (imgName) => {
  return require(`../assets/images/masks/image_masks/${imgName}`);
};

let filenames = [];
let captions = [];
const masksGrid = new Array(json.length).fill().map((item, i) => {
  filenames.push(json[i].filename);
  captions.push(json[i].caption);
  return (
    <>
      <div style={ImgDivStyle} key={i}>
        <img
          id={filenames[i]}
          style={imgStyle}
          src={IMG(filenames[i])}
          alt="whoops"
          onMouseEnter={() => {
            SpeakText(captions[i]);
            typeText(captions[i]);
          }}
          onMouseLeave={() => {
            speechSynthesis.cancel();
            clearText();
          }}
        ></img>
      </div>
    </>
  );
  // };
});

const Mask = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div id="maskTextDiv"></div>
      <div style={MaskPageStyle}>{masksGrid}</div>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </>
  );
};
export default Mask;

// let view = document.createElement("CANVAS");
// document.body.appendChild(view);
// function Masks() {
//   const [open, setOpen] = useState(false);
//   console.log(json);

//   let width, height, app;
//   let diffX, diffY;

//   let pointerDownTarget = 0;
//   let pointerStart = new PIXI.Point();
//   let pointerDiffStart = new PIXI.Point();
//   let uniforms;
//   let loader = PIXI.Loader.shared;

//   // store loaded resources here
//   const resources = PIXI.Loader.shared.resources;
//   let viewport, container;
//   let bulge, splitFilter;

//   // set dimensions
//   function initDimensions() {
//     width = window.innerWidth;
//     height = window.innerHeight;
//     diffX = 0;
//     diffY = 0;
//   }

//   function initUniforms() {
//     uniforms = {
//       uResolution: new PIXI.Point(width, height),
//       uPointerDown: pointerDownTarget,
//       uPointerDiff: new PIXI.Point(),
//     };
//   }
//   //   PIXI.utils.clearTextureCache();
//   //   loader.add(["../assets/shaders/masks_stageFrag.glsl"]).load(init);

//   // init pixijs app
//   function initApp() {
//     app = new PIXI.Application({ view });

//     // resize the renderer view in css pixels to allow for resolutions other than 1
//     app.renderer.autoDensity = true;

//     app.renderer.resize(width, height);

//     viewport = new Viewport({
//       screenWidth: window.innerWidth,
//       screenHeight: window.innerHeight,
//       worldWidth: 2000,
//       worldHeight: 2000,
//       interaction: app.renderer.plugins.interaction,
//     });
//     viewport.moveCorner(0, 0);
//     // viewport.fitWidth(window.innerWidth);

//     viewport.drag().pinch();
//     // .bounce();
//     // .clamp({ direction: "all" });
//     // .wheel();
//     // .decelerate();
//     // viewport.moveCorner(100, -100);

//     // load resources and then init the app
//     // set the distortion filter for the entire stage
//     // const stageFragmentShader = resources["shaders/stageFrag.glsl"].data;
//     // const stageFilter = new PIXI.Filter(
//     //   undefined,
//     //   stageFragmentShader,
//     //   uniforms
//     // );
//     // app.stage.filters = [stageFilter];

//     // Initialize a Container element
//     container = new PIXI.Container();
//     container.interactive = true;
//     container.addChild(viewport);
//     app.stage.addChild(container);
//     app.stage.interactive = true;

//     bulge = new BulgePinchFilter();
//     bulge.center.x = 0.5;
//     bulge.center.y = 0.5;
//     bulge.radius = 200;
//     bulge.strength = 1;
//     app.stage.on("pointermove", moveBulge);
//     function moveBulge(e) {
//       let mousePos = e.data.global;
//       //normalize mouse positions for bulge filter
//       bulge.center.x = mousePos.x / app.renderer.width;
//       bulge.center.y = mousePos.y / app.renderer.height;

//       // allows camera to follow mouse position but clamps to window edges :(
//       viewport.follow({ x: mousePos.x, y: mousePos.y, radius: "0" });
//       // if (
//       //   mousePos.x > window.innerWidth - 100 ||
//       //   mousePos.y > window.innerHeight - 75
//       // ) {
//       //   viewport.mouseEdges({ radius: "100", speed: "7" });
//       //   console.log("working")
//       // }
//     }

//     splitFilter = new RGBSplitFilter();
//     splitFilter.enabled = false;
//     splitFilter.red.x = -10;
//     splitFilter.red.y = 0;
//     splitFilter.green.x = -3;
//     splitFilter.green.y = 0;

//     app.stage.filters = [bulge, splitFilter];
//   }
//   function initEvents() {
//     app.stage.interactive = true;

//     app.stage
//       .on("pointerdown", onPointerDown)
//       .on("pointerup", onPointerUp)
//       .on("pointerupoutside", onPointerUp)
//       .on("pointermove", onPointerMove);
//   }

//   function onPointerDown(e) {
//     // console.log("down");
//     const { x, y } = e.data.global;
//     pointerDownTarget = 1;
//     pointerStart.set(x, y);
//     pointerDiffStart = uniforms.uPointerDiff.clone();
//   }

//   function onPointerUp() {
//     // console.log("up");
//     pointerDownTarget = 0;
//   }

//   // On pointer move, calculate coordinates diff
//   function onPointerMove(e) {
//     const { x, y } = e.data.global;
//     if (pointerDownTarget) {
//       // console.log("dragging");
//       diffX = pointerDiffStart.x + (x - pointerStart.x);
//       diffY = pointerDiffStart.y + (y - pointerStart.y);

//       // to limit the scrolling so it never goes past the rectangles
//       // diffX =
//       //   diffX > 0
//       //     ? Math.min(diffX, centerX + imagePadding)
//       //     : Math.max(diffX, -(centerX + widthRest));
//       // diffY =
//       //   diffY > 0
//       //     ? Math.min(diffY, centerY + imagePadding)
//       //     : Math.max(diffY, -(centerY + heightRest));
//     }
//   }

//   let imgSprites = [];
//   function loadImgs() {
//     let displayImg;
//     for (let i = 0; i < json.length; i++) {
//       //   loader.reset();
//       //   PIXI.utils.clearTextureCache();
//       let filename = json[i].filename;
//       displayImg = require("../assets/images/masks/image_masks/" + filename);
//       app.loader.add(json[i].caption, displayImg);
//       json[i].image = displayImg;
//       console.log(displayImg);
//     }
//     app.loader.load((loader, resources) => {
//       splitFilter.enabled = false;
//       for (let key in json) {
//         const caption = json[key].caption;
//         const imgSprite = new PIXI.Sprite(resources[caption].texture);
//         imgSprite.anchor.x = 0.5;
//         imgSprite.anchor.y = 0.5;
//         imgSprite.width = 200;
//         imgSprite.height = 100;
//         imgSprite.x = (key % 20) * imgSprite.width * 1.02;
//         imgSprite.y = Math.floor(key / 25) * imgSprite.height * 1.05;
//         imgSprite.interactive = true;

//         imgSprite.on("mouseover", () => {
//           SpeakText(caption);
//           typeText(caption);
//         });

//         imgSprite.on("mouseout", () => {
//           speechSynthesis.cancel();
//           clearText();
//         });
//         viewport.addChild(imgSprite);
//         imgSprites.push(imgSprite);
//       }
//     });
//   }

//   function init() {
//     initDimensions();
//     initUniforms();
//     initApp();
//     // initBackground();
//     initEvents();
//     // initContainer();
//     loadImgs();
//     app.ticker.add(() => {
//       // Multiply the values by a coefficient to get a smooth animation
//       uniforms.uPointerDown +=
//         (pointerDownTarget - uniforms.uPointerDown) * 0.075;
//       uniforms.uPointerDiff.x += (diffX - uniforms.uPointerDiff.x) * 0.2;
//       uniforms.uPointerDiff.y += (diffY - uniforms.uPointerDiff.y) * 0.2;
//       // Set position for the container
//       // container.x = uniforms.uPointerDiff.x - centerX;
//       // container.y = uniforms.uPointerDiff.y - centerY;
//     });
//   }
//   init();
//   return (
//     <header className="App-header">
//       <div className="Title-text">Masked Contexts</div>
//       <Burger open={open} setOpen={setOpen} />
//       <Menu open={open} setOpen={setOpen} />
//     </header>
//   );
// }

// export default Masks;
