import React from "react";
// import ReactDom from "react-dom";
import Masonry from "react-masonry-css";

let MasonryGrid = () => {
  //dynamically import all images from folder

  function importAll(r) {
    return r.keys().map(r);
  }
  const images = importAll(
    require.context("../assets/images/landing_masonry", false, /\.jpg$/)
  );
  // console.log(images);

  //   put each imgs in its own masonry div
  const imagesDiv = new Array(images.length).fill().map((item, i) => {
    return (
      <div key={i}>
        <div>
          <img
            draggable={false}
            src={images[i]}
            style={{ width: "80%", height: "auto" }}
            alt="Whoopsieedasies"
          ></img>
        </div>
      </div>
    );
  });

  const breakpointColumnsObj = {
    default: 21,
    1400: 16,
    1100: 12,
    700: 8,
    500: 5,
  };
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {imagesDiv}
    </Masonry>
  );
};

export default MasonryGrid;
