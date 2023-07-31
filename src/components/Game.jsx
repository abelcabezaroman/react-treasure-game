import { useState } from "react";

const defaultData = [
    [
        {
            img: "x.png"
        },
        {
            img: "x.png"
        },
        {
            img: "x.png"
        },
        {
            img: "x.png"
        },
        {
            img: "x.png"
        },
    ], [
        {
            img: "x.png"
        },
        {
            img: "x.png"
        },
        {
            img: "x.png"
        },
        {
            img: "x.png"
        },
        {
            img: "x.png"
        },
    ], [
        {
            img: "x.png"
        },
        {
            img: "x.png"
        },
        {
            img: "x.png"
        },
        {
            img: "x.png"
        },
        {
            img: "x.png"
        },
    ], [
        {
            img: "x.png"
        },
        {
            img: "x.png"
        },
        {
            img: "x.png"
        },
        {
            img: "x.png"
        },
        {
            img: "x.png"
        },
    ], [
        {
            img: "x.png"
        },
        {
            img: "x.png"
        },
        {
            img: "x.png"
        },
        {
            img: "x.png"
        },
        {
            img: "x.png"
        },
    ]

]

const random = Math.floor(Math.random() * 5);
const random2 = Math.floor(Math.random() * 5);

export default function Game() {
    const [data, setData] = useState(defaultData);

    const checkGame = (index, indexChild) => {
        const copyData = [...data];

        if (random === index && random2 === indexChild) {
            copyData[index][indexChild].img = "chest.png";
        } else {
            copyData[index][indexChild].img = "skull.png";
        }

        setData(copyData)
    }

    return <div>
        {data.map((item, index) => item.map((itemChild, indexChild) => <img onClick={() => checkGame(index, indexChild)} key={index + "-" + indexChild}  src={itemChild.img} alt="Imagen de juego" />))}
    </div>
}