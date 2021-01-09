import {tetrominoes} from "../constants/tetrominoes";
import {getCurrentValues, setValue} from "../currentValues";
import {GRID_WIDTH} from "../constants/grid";

export const getRandomTetrominoe = () =>{
    const randomNum = Math.floor(Math.random()* tetrominoes.length);
    return tetrominoes[randomNum];
};

export const unDraw = () => {
    const {position, rotation, tetrominoe, elements} = getCurrentValues();
    tetrominoe[rotation].forEach((blockIndex) => {
        elements[position + blockIndex].classList.remove("filled");
    });
};

export const draw = () => {
    const {position, rotation, tetrominoe, elements} = getCurrentValues();
    tetrominoe[rotation].forEach((blockIndex) => {
        elements[position + blockIndex].classList.add("filled");
    });
};

export const start = () => {
    const {position} = getCurrentValues();
    if(document.querySelector(".filled")){
        unDraw();
        setValue("position", position + GRID_WIDTH);
    }
    draw();
};

export const moveLeft = () => {
    const {tetrominoe, rotation, position, elements} = getCurrentValues();
    unDraw();
    const isLeftBorder = tetrominoe[rotation].some((index) => (position + index) % GRID_WIDTH === 0);
    if(!isLeftBorder){
        setValue("position", position -1);
    }
    draw();

};

export const moveRight = () => {
    const {tetrominoe, rotation, position, elements} = getCurrentValues();
    unDraw();
    const isRightBorder = tetrominoe[rotation].some((index) => (position + index) % GRID_WIDTH === GRID_WIDTH - 1);
    if(!isRightBorder){
        setValue("position", position + 1);
    }
    draw();
};

export const rotate = () => {
    const {tetrominoe, rotation} = getCurrentValues();
    unDraw();
    setValue("rotation", rotation + 1);
    if(rotation + 1 === tetrominoe.length){
        setValue("rotation", 0);
    }
    draw();
};

export const bindEvents = () => {
    document.addEventListener("keyup", (e) => {
        handleControls(e);
    })
};

export const handleControls = (e) => {
  if(e.keyCode === 37){
      moveLeft();
  }
  if(e.keyCode === 39){
      moveRight();
  }
  if(e.keyCode === 38){
      rotate();
  }
  if(e.keyCode === 40){
      start();
  }
};