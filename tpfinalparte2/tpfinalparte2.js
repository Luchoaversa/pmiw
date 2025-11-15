//https://www.youtube.com/watch?v=Q5pucIjqcjA

let juego;

function setup() {
  createCanvas(640, 480);  
  juego = new Juego(); 
}

function draw() {
  background(0);  
  juego.actualizar();  
  juego.mostrar();  
}
