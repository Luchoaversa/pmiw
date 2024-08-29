//https://youtu.be/Lf9XE_SVVQ4

// Variables globales
let color1;
let color2;
let opart;

function preload() {
  opart = loadImage('/data/opart.jpeg'); //cargar imagen
}

function setup() {
  createCanvas(800, 400);
  reiniciarVariables();
}

function draw() {
  console.log(mouseX + "," + mouseY);
  background(255); // Fondo blanco
  image(opart, 20, 10, 350, 350);
  
  let baseSize = 20;  // Tamaño base del cuadrado
  let rectSize = calcularTamanioCuadrado(baseSize);  // Usamos la función con return
  dibujarGrilla(rectSize, color1, color2, 400); // 400 es la posición X inicial
  
  // Dibujar cuadrados blancos pequeños
  DibujarCuadraditos(430, 0);
  DibujarCuadraditos(511, 0);
  DibujarCuadraditos(400, 31);
  DibujarCuadraditos(431, 31);
  DibujarCuadraditos(640, 0);
  DibujarCuadraditos(640, 31);
  DibujarCuadraditos(720, 0);
  DibujarCuadraditos(720, 31);
  DibujarCuadraditos(751, 31);
  DibujarCuadraditos(471, 71);
  DibujarCuadraditos(440, 40);
  DibujarCuadraditos(511, 31);
  DibujarCuadraditos(520, 40);
  DibujarCuadraditos(551, 71);
  DibujarCuadraditos(600, 71);
  DibujarCuadraditos(631, 40);
  DibujarCuadraditos(680, 71);
  DibujarCuadraditos(711, 40);
  DibujarCuadraditos(400, 111);
  DibujarCuadraditos(431, 111);
  DibujarCuadraditos(480, 80);
  DibujarCuadraditos(560, 80);
  DibujarCuadraditos(591, 80);
  DibujarCuadraditos(591, 111);
  DibujarCuadraditos(560, 111);
  DibujarCuadraditos(671, 80);
  DibujarCuadraditos(720, 111);
  DibujarCuadraditos(751, 111);
  DibujarCuadraditos(711, 120);
  DibujarCuadraditos(680, 151);
  DibujarCuadraditos(600, 120);
  DibujarCuadraditos(631, 151);
  DibujarCuadraditos(551, 120);
  DibujarCuadraditos(520, 151);
  DibujarCuadraditos(440, 120);
  DibujarCuadraditos(471, 151);
  DibujarCuadraditos(480, 160);
  DibujarCuadraditos(480, 191);
  DibujarCuadraditos(511, 160);
  DibujarCuadraditos(511, 191);
  DibujarCuadraditos(640, 160);
  DibujarCuadraditos(640, 191);
  DibujarCuadraditos(671, 160);
  DibujarCuadraditos(671, 191);
  DibujarCuadraditos(471, 200);
  DibujarCuadraditos(440, 231);
  DibujarCuadraditos(520, 200);
  DibujarCuadraditos(551, 231);
  DibujarCuadraditos(600, 231);
  DibujarCuadraditos(631, 200);
  DibujarCuadraditos(711, 231);
  DibujarCuadraditos(680, 200);
  DibujarCuadraditos(400, 240);
  DibujarCuadraditos(431, 240);
  DibujarCuadraditos(480, 271);
  DibujarCuadraditos(560, 240);
  DibujarCuadraditos(560, 271);
  DibujarCuadraditos(591, 240);
  DibujarCuadraditos(591, 271);
  DibujarCuadraditos(671, 271);
  DibujarCuadraditos(720, 240);
  DibujarCuadraditos(751, 240);
  DibujarCuadraditos(440, 311);
  DibujarCuadraditos(471, 280);
  DibujarCuadraditos(520, 311);
  DibujarCuadraditos(551, 280);
  DibujarCuadraditos(600, 280);
  DibujarCuadraditos(631, 311);
  DibujarCuadraditos(680, 280);
  DibujarCuadraditos(711, 311);
  DibujarCuadraditos(400, 320);
  DibujarCuadraditos(431, 320);
  DibujarCuadraditos(431, 351);
  DibujarCuadraditos(511, 320);
  DibujarCuadraditos(511, 351);
  DibujarCuadraditos(640, 320);
  DibujarCuadraditos(640, 351);
  DibujarCuadraditos(720, 320);
  DibujarCuadraditos(720, 351);
  DibujarCuadraditos(751, 320);
}

function keyPressed() {
  if (key === 'r') {
    reiniciarVariables();
  }
}

function reiniciarVariables() {
  color1 = color(0); // Negro
  color2 = color(255); // Blanco
}

function calcularTamanioCuadrado(baseSize) {
  return baseSize * 2;
}

function dibujarGrilla(rectSize, color1, color2, startX) {
  for (let y = 0; y < height - rectSize; y += rectSize) {
    for (let x = startX; x < width - rectSize; x += rectSize) {
      if ((x / rectSize + y / rectSize) % 2 === 0) {
        fill(color1); // Color 1
      } else {
        fill(color2); // Color 2
      }
      rect(x, y, rectSize, rectSize);
    }
  }
}

function DibujarCuadraditos(posX, posY) {
  fill(color2);
  rect(posX, posY, 9, 9);
}

// Evento del mouse para modificar una variable
function mousePressed() {
  color1 = color(random(255), random(255), random(255));
  color2 = color(random(255), random(255), random(255));
}
