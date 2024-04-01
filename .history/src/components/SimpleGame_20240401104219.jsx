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

const generateInitialArray = (num) => {
    const newBiXArray = [];
    for (let index = 0; index < num; index++) {
        newBiXArray.push({
            img: "x.png",
        });
    }

    return newBiXArray;
};


const numRow = 5;

const random = Math.floor(Math.random() * numRow);

export default function SimpleGame() {
    const [data, setData] = useState(generateInitialArray(numRow));

    console.log(data);

    const checkGame = (index) => {
        const copyData = [...data];

        if (random === index) {
            copyData[index].img = "chest.png";
        } else {
            copyData[index].img = "skull.png";
        }

        setData(copyData);
    };

    return (
        <div>
            {data.map((item, index) =>
                    <img
                        onClick={() => checkGame(index)}
                        key={index}
                        src={item.img}
                        alt="Imagen de juego"
                    />
            )}
        </div>
    );
}
