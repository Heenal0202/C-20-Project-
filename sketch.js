var car,wall;
var speed, weight; 

function setup() {
  createCanvas(850, 400);

	speed=random(55,90)
	weight=random(400,1500)

	car=createSprite(150, 200, 20,20);   
	car.velocityX = speed;
	car.shapeColor="white";

	wall=createSprite(750,200,20,120)
	wall.shapeColor="grey";
}


function draw() {
  background(0);

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
  	car.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22500;
	  if(deformation>180)
	{
		car.shapeColor=color(255,0,0);
	}

	if(deformation<180 && deformation>100)
	{
		car.shapeColor=color(230,230,0);
	}

	if(deformation<100)
	{
		car.shapeColor=color(0,255,0);
	}
  }  

  drawSprites();

}