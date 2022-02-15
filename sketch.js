var ship, shipmove;
function preload(){
  shipmove = loadAnimation ("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaimg = loadImage ("sea.png");
}

function setup(){
  createCanvas(700,500);
  sea = createSprite (500, 300, 50, 50);
  sea.addImage ("running", seaimg);
  sea. scale = 0.5
  ship = createSprite (100, 300, 50, 50);
  ship.addAnimation ("running", shipmove);
  ship. scale = 0.25
}

function draw() {
  background("blue");
  sea.velocityX = -4
  if (sea.x < 0){
    sea.x = sea.width/4;
  }
  
    drawSprites();
}
