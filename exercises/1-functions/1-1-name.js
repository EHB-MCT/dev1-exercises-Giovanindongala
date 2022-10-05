"use strict";

let canvas  = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawName();
function drawName() {
    context.strokeStyle = 'red';
    context.linewidth = 5;
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(150, 50);
    context.lineTo(50, 50);
    context.lineTo(50, 200);
    context.lineTo(150, 200);
    context.lineTo(150, 150);
    context.lineTo(100, 150);
    context.stroke();

    context.strokeStyle = 'blue';
    context.linewidth = 5;
    context.beginPath();
    context.moveTo(200, 50);
    context.lineTo(200, 200);
    context.stroke();

    context.strokeStyle = 'green';
    context.linewidth = 5;
    context.beginPath();
    context.moveTo(250, 50);
    context.lineTo(350, 50);
    context.lineTo(350, 200);
    context.lineTo(250, 200);
    context.lineTo(250, 50);
    context.stroke();

    context.strokeStyle = 'orange';
    context.linewidth = 5;
    context.beginPath();
    context.moveTo(400, 50);
    context.lineTo(450, 200);
    context.lineTo(500, 50);
    context.stroke();

    context.strokeStyle = 'purple';
    context.linewidth = 5;
    context.beginPath();
    context.moveTo(540, 50);
    context.lineTo(490, 200);
    context.moveTo(540, 50);
    context.lineTo(575, 200);
    context.stroke();

    context.strokeStyle = 'purple';
    context.linewidth = 5;
    context.beginPath();
    context.moveTo(700, 100);
    context.lineTo(500, 50);
    context.stroke();
    

}



