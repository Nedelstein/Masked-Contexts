import React, { useState } from "react";
import Swiper from "react-id-swiper";
import "swiper/swiper.scss";

import ConversationModal from "../components/ConversationModal";
import { autoDetectRenderer } from "pixi.js";

const IMG = (imgName) => {
  return require(`../assets/images/conversations/${imgName}`);
};

const ConversationsGallery = () => {
  let filename;

  function importAll(r) {
    return r.keys().map(r);
  }

  const ImageDivStyle = {
    display: "block",
    width: "auto%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "20%",
    marginBottom: "25%",
  };

  const ImageStyle = {
    width: "100%",
  };
  const images = importAll(
    require.context("../assets/images/conversations/masks", false, /\.png$/)
  );

  const imagesDiv = new Array(images.length).fill().map((item, i) => {
    filename = images[i].replace("/static/media/", "");
    filename = filename.substring(0, filename.indexOf("_"));
    return (
      <div key={i}>
        <img
          id={filename}
          src={images[i]}
          style={{
            width: "30%",
            objectFit: "cover",
            objectPosition: "center",
            cursor: "pointer",
          }}
          alt="whoops"
          //   onClick={openModal}
        ></img>
      </div>
    );
  });

  const params = {
    effect: "coverflow",
    grabCursor: "true",
    centeredSlides: "true",
    slidesPerView: 3,
    // spaceBetween: 20,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 250,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <Swiper {...params}>
      <div style={ImageDivStyle}>
        <img style={ImageStyle} src={IMG("masks/209842_mask.png")} />
      </div>
      <div style={ImageDivStyle}>
        <img style={ImageStyle} src={IMG("masks/209842_mask.png")} />
      </div>
      <div style={ImageDivStyle}>
        <img style={ImageStyle} src={IMG("masks/209842_mask.png")} />
      </div>
      <div style={ImageDivStyle}>
        <img style={ImageStyle} src={IMG("masks/209842_mask.png")} />
      </div>
      <div style={ImageDivStyle}>
        <img style={ImageStyle} src={IMG("masks/209842_mask.png")} />
      </div>
      <div style={ImageDivStyle}>
        <img style={ImageStyle} src={IMG("masks/209842_mask.png")} />
      </div>
    </Swiper>
  );
};

export default ConversationsGallery;
