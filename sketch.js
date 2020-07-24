var thickness,wall;
var speed,weight,bullet;


function setup() {
createCanvas(1600,400);
  bullet=createSprite(100, 200, 50, 15);
  bullet.velocityX = speed;
  bullet.shapeColor = "red";

  wall=createSprite(1200,200,thickness, height/2);
  wall.shapeColor = color(80,80,80)

 speed=random(223,321);
 weight=random(30,52);

 thickness=random(22,83);
}

function draw() {
  background(0,0,0); 

  drawSprites();
}

function hasCollided(bullet, wall);
{
  bullerRightEdge= bullet.x + bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false;
}

if(hasCollided(bullet, wall))
{
  bullet.velocityX=0;
  var damage= 0.5 * weight * speed* speed/(thickness *thickness *thickness);

  if(damage>10)
  {
     wall.shapeColor=color(255,0,0);
  }


  if(damage<10)
  {

    wall.shapeColor=color(0, 255,0);
  }
}