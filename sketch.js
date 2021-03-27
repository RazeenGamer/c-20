function setup() {
  createCanvas(800,400);
 car = createSprite(400, 200, 50, 50);
 car.shapeColor="green"
 wall = createSprite(200,200,80,40);
 wall.shapeColor="green"
}

function draw() {
  background("black");  
car.y=World.mouseY
car.x=World.mouseX
if (car.x-wall.x<wall.width/2+car.width/2
 &&wall.x-car.x<wall.width/2+car.width/2
 &&car.y-wall.y<wall.height/2+car.height/2
 && wall.y-car.y<wall.height/2+car.height/2){
  car.shapeColor="red"
  wall.shapeColor="red"
}
else
{
  car.shapeColor="green"
  wall.shapeColor="green"
}
  drawSprites();
}