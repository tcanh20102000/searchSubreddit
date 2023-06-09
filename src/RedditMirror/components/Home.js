import React from "react";
import storedImage from '../data/images/images.js';

function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}


export default function Home() {
  //Get images from local files
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
        width: "100%",
        height: "89vh",
      }}
    ></div>
  );
}
