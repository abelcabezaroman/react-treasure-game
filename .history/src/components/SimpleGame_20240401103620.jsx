import { useState } from "react";

// const defaultData = [
//   [
//     {
//       img: "x.png",
//     },
//     {
//       img: "x.png",
//     },
//     {
//       img: "x.png",
//     },
//     {
//       img: "x.png",
//     },
//     {
//       img: "x.png",
//     },
//   ],
//   [
//     {
//       img: "x.png",
//     },
//     {
//       img: "x.png",
//     },
//     {
//       img: "x.png",
//     },
//     {
//       img: "x.png",
//     },
//     {
//       img: "x.png",
//     },
//   ],
//   [
//     {
//       img: "x.png",
//     },
//     {
//       img: "x.png",
//     },
//     {
//       img: "x.png",
//     },
//     {
//       img: "x.png",
//     },
//     {
//       img: "x.png",
//     },
//   ],
//   [
//     {
//       img: "x.png",
//     },
//     {
//       img: "x.png",
//     },
//     {
//       img: "x.png",
//     },
//     {
//       img: "x.png",
//     },
//     {
//       img: "x.png",
//     },
//   ],
//   [
//     {
//       img: "x.png",
//     },
//     {
//       img: "x.png",
//     },
//     {
//       img: "x.png",
//     },
//     {
//       img: "x.png",
//     },
//     {
//       img: "x.png",
//     },
//   ],
// ];

const generateInitialArray = (num, num2) => {
  const newBiXArray = [];
  for (let index = 0; index < num; index++) {
    newBiXArray.push({
        img: "x.png",
      });
    }
  }

  return newBiXArray;
};


const numRow = 5;

const random = Math.floor(Math.random() * numRow);

export default function Game() {
  const [data, setData] = useState(generateInitialArray(numRow, numCols));

  console.log(data);

  const checkGame = (index, indexChild) => {
    const copyData = [...data];

    if (random === index && random2 === indexChild) {
      copyData[index][indexChild].img = "chest.png";
    } else {
      copyData[index][indexChild].img = "skull.png";
    }

    setData(copyData);
  };

  return (
    <div>
      {data.map((item, index) =>
        item.map((itemChild, indexChild) => (
          <img
            onClick={() => checkGame(index, indexChild)}
            key={index + "-" + indexChild}
            src={itemChild.img}
            alt="Imagen de juego"
          />
        ))
      )}
    </div>
  );
}
