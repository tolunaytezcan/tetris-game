import "./reset.css";
import "./style.css";
import {lTetromino} from "./constants/tetrominoes";
import {elements} from "./functions/grid";
import {setValue} from "./currentValues";
import {start, bindEvents} from "./functions/tetrimones";

const gridItems = elements;

setValue("elements", gridItems);

document.querySelector("#start-button").addEventListener("click", () => {
    const startTetrisInterval = () => {
        start();
    };
    const timer = setInterval(startTetrisInterval, 800);
    setValue("timer", timer);
    bindEvents();
});