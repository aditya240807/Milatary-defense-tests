var thickness,wall;

var bullet,speed, weight;

var bulletRightEdge, wallLeftEdge

function setup() {
  
   speed=random(223,321)
   weight=random(30,52)
   thickness = random(22,83);

   bullet = createSprite(40, 200, 65, 20);
   bullet.shapeColor = "grey"
   wall = createSprite(1200,200,thickness,height/2);
   wall.shapeColor = color(80,80,80);
   bullet.velocityX = speed;
  createCanvas(1600,400);
  
}

function draw() {
  background(255,255,255);
  drawSprites();
  hasCollided();
  if(hasCollided()){
  
   bullet.velocityX = 0
   var dmg=0.5 *weight * speed * speed/(thickness *thickness *thickness);

   
   if(dmg>10)
   {
     wall.shapeColor = color(255,0,0)
   }

   if(dmg<10)
   {
     wall.shapeColor = color(0,255,0)
   }


  }
  
}

function hasCollided(){
 bulletRightEdge=bullet.x + bullet.width;
 wallLeftEdge=wall.x
if(bulletRightEdge>=wallLeftEdge){
 
  return true

}

return false

}