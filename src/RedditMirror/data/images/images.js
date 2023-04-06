import Austria from  "./Austria.png";
import Engetsu from "./EngetsuIslandJapan.jpg";
import Junction from "./JunctionSiegenGermany.jpg";
import OatField from './OatField.jpg'
import OutOfStock from './OutOfStock.jpg'
import RailLine from "./Railway_lineSunset.png";

// const images = {
//   Austria,
//   Engetsu,
//   Junction,
//   OatField,
//   OutOfStock,
//   RailLine,
// };

const storedImage = {
  success: true,
  data: {
    images: [
      {
        id: 1,
        name: "Austria",
        img: Austria,
        landscape: true,
      },
      {
        id: 2,
        name: "Engetsu ",
        img: Engetsu,
        landscape: true,
      },
      {
        id: 3,
        name: "Junction",
        img: Junction,
        landscape: true,
      },
      {
        id: 4,
        name: "Oat field",
        img: OatField,
        landscape: true,
      },
      {
        id: 5,
        name: "Out of stock",
        img: OutOfStock,
        landscape: true,
      },
      {
        id: 6,
        name: "Rail line",
        img: RailLine,
        landscape: true,
      },
    ],
  },
};
export default storedImage;
