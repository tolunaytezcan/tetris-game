import {GRID_SIZE} from "../constants/grid";

const $tetrisRootElement = document.querySelector("#tetris-grid");

export const createGrid = () => {
    for(let i=0; i< GRID_SIZE; i++){
        const singLeBlock = document.createElement("div");
        singLeBlock.classList.add("tetris-grid-item");
        $tetrisRootElement.appendChild(singLeBlock)
    }
    return Array.from(document.querySelectorAll(".tetris-grid-item"));
};