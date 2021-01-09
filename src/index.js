import "./reset.css";
import "./style.css";
import {createGrid} from "./functions/grid";
import {lTetromino} from "./constants/tetrominoes";
import {GRID_WIDTH} from "./constants/grid";
import {tetrominoes} from "./constants/tetrominoes";

const blocks = createGrid();

const getRandomNumber = (max) => {
    const randomNum = Math.floor(Math.random() * max);
    return randomNum;
};

const currentTetromino = tetrominoes[getRandomNumber(5)];
const currentRotation  = currentTetromino[getRandomNumber(currentTetromino.length)];


const startingPoint = Math.floor(GRID_WIDTH / 2) - 2;

const colors = ["#2c061f", "#d89216", "#e1d89f", "#374045"];
const randomColor = colors[getRandomNumber(colors.length)];
currentRotation.forEach((index) => {
    blocks[startingPoint + index].classList.add("filled");
    blocks[startingPoint + index].style.backgroundColor = randomColor;
});