
function setup() {
  createCanvas(800,400);
  fixed= createSprite(200, 200, 50, 80);
  moving= createSprite(400, 200, 80, 30);

}

function draw() {
  background(255,255,255);  
  moving.x=World.mouseX;
  moving.y=World.mouseY;
  if(abs(fixed.x-moving.x)<=fixed.width/2+moving.width/2 &&
  abs(fixed.y-moving.y)<=fixed.height/2+moving.height/2){
    fixed.shapeColor = "green"
    moving.shapeColor = "green"
  }else{
    fixed.shapeColor = "red"
    moving.shapeColor = "red"
  }

  drawSprites();
}
