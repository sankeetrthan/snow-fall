var bg,snow
var snowfall=[]
var new;
function preload(){
  bg = loadImage("snow2.jpg");
  
}
function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(bg); 
  snowfall.push(new Snow(random(0,800),random(0,400))) 
  
  drawSprites();
}