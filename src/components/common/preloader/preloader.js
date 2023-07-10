import React from 'react'
import preloader from "./../../../assets/SVG-Loaders-master/svg-loaders/circles.svg"

let Preloader = () => {
  return (
    <div>
      <div style={{ balckgroundColor: "white" }}>
        <img src={preloader} />
      </div>
    </div>
  );
};

export default Preloader

