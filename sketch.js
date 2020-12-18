

var car,car2,car3,car4,wall,wall2,wall,wall4;


var speed, weight; 


function setup() {
  createCanvas(1000, 600);


	speed=random(55,90)
	weight=random(400,1500)

	

	car=createSprite(50, 100, 50,50);   
	car.velocityX = speed;
	car.shapeColor=color(200);
    
  	wall=createSprite(1000,100, 60, height/5)
	wall.shapeColor=color(80,80,80)
	  
	car3=createSprite(100,550,50,50)
	car3.velocityX = speed;
	car3.shapeColor=color(255);
 
	wall3=createSprite(1000,550,60, height/5)
	wall3.shapeColor=color(80,80,80)
 
	car4=createSprite(100,310,100,40)
	car4.velocityX = speed;
	car4.shapeColor=color(255);
	
	wall4=createSprite(1000,310,60,height/5)
    wall4.shapeColor=color(80,80,80)
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

  
  

  if(wall3.x-car3.x < (car3.width+wall.width)/2)
  {
  	car3.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22500;
	if(deformation>180)
	{
		car3.shapeColor=color(255,0,0);
	}

	if(deformation<180 && deformation>100)
	{
		car3.shapeColor=color(230,230,0);
	}

	if(deformation<100)
	{
		car3.shapeColor=color(0,255,0);
	}
  }


  if(wall4.x-car4.x < (car4.width+wall.width)/2)
  {
  	car4.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22500;
	if(deformation>180)
	{
		car4.shapeColor=color(200,0,0);
	}

	if(deformation<180 && deformation>100)
	{
		car4.shapeColor=color(230,230,0);
	}

	if(deformation<100)
	{
		car4.shapeColor=color(255,0,0);
	}
  }


  drawSprites();
 
}


