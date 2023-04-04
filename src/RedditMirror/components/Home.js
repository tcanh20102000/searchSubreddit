import React from "react";
import storedImage from '../data/storedImage.js';

function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}


export default function Home() {
  const [allImages, setAllImages] = React.useState(storedImage.data.images);
  console.log("data, ", allImages);

//   let defaultImg = allImages[randomNumber(0, allImages.length)].img;
//   console.log(defaultImg);

  const [currImg, setCurrImg] = React.useState({
    randomImg: allImages[randomNumber(0, allImages.length)].img,
  });
  return (
    <div
      className="r-img"
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${currImg.randomImg})`,
        width: "99vw",
        height: "100vh",
      }}
    ></div>
  );
}
