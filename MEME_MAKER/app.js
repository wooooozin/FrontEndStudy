const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.rect(50, 50, 100, 200);
ctx.fill();
ctx.fillStyle = "red";
ctx.fill(); 