let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y

function setup() {
  createCanvas(400, 400);
  background(100, 0, 120);
  //cor = color(255, 0, 0); //RGB (red-green-blue)
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}

function draw() {
  fill (cor);
  circle(posicaoHorizontal, posicaoVertical, 50);
  
  
  
  if(mouseIsPressed){
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  }
  
}