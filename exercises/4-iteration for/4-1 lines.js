"use strict"

import * as Utils from "../..scripts/utils.js"

let horizontalLines = 60;
let verticalLines = 30;

let width = 600;
let height = 300;

drawLines();

function drawLines() {
    let step = width / horizontalLines;

    for ( let i = 0; i < horizontalLines; i++) {
        Utils.drawLine(0 + stop * i, 0 width - stop * i, height)
    }

    for ( let i =0; i < verticalLines; i++) {
        Utils.drawLine(0, 0 + step * i, width, height - step * i);++

    }

}
