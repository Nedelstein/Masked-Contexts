import React from "react";
import ReactDom from "react-dom";
import Masonry from "react-masonry-css";

let ConversationsMasonry = () => {
  //dynamically import all images from folder
  function importAll(r) {
    return r.keys().map(r);
  }
  const images = importAll(
    require.context("../assets/images/conversations/masks", false, /\.png$/)
  );

  const imagesDiv = new Array(images.length).fill().map((item, i) => {
    return (
      <div key={i}>
        <div>
          <img src={images[i]} style={{ width: "60%" }} alt="whoops"></img>
        </div>
      </div>
    );
  });

  const breakpointColumbsObj = {
    default: 4,
    1100: 3,
    700: 3,
    500: 2
  };

  return (
    <div Style="margin-top: 10%; margin-left: 10%">
      <Masonry
        breakpointCols={breakpointColumbsObj}
        className="my-masony-grid"
        columnClassName="my-masonry-grid_column"
      >
        {imagesDiv}
      </Masonry>
    </div>
  );
};

export default ConversationsMasonry;
