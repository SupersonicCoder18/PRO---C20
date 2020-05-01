var car, wall;

function setup() {
  createCanvas(1600,400);
  car = createSprite(100, 200, 50, 50);
  car.shapeColor = "white";
  car.velocityX = random(55, 90);
  wall = createSprite(1500, 200, 30, 400);
  wall.shapeColor = "grey";
}

function draw() {
  background(0, 0, 0); 
  createEdgeSprites();
  drawSprites();
  if (car.collide(wall) && (0.5*weight*speed*speed)/22500 < 2866) {
    car.shapeColor = "green";
    car.velocityX = 0;
  } 
  else if (car.collide(wall) && (0.5*weight*speed*speed)/22500 < 4666) {
    car.shapeColor = "yellow";
    car.velocityX = 0;
  }
  else if (car.collide(wall) && (0.5*weight*speed*speed)/22500 > 4666) {
    car.shapeColor = "red";
    car.velocityX = 0;
  }
  else if(car.collide(wall) && (0.5*weight*speed*speed)/22500 < 2866) {
    car.shapeColor = "white";
    car.speed = 0;
  }
   car.display();
}