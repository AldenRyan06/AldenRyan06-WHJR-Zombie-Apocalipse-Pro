//Creating variables
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
//loading images
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	//creating canvas
	createCanvas(800, 700);
	rectMode(CENTER);
  packageGroup = new Group()
	
//creating sprites
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, 1200,10);
	groundSprite.shapeColor=color(255)

   
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(400 , helicopterSprite.y , 5 , {restitution:0.85, isStatic:false});
	World.add(world, packageBody);
	packageSprite=createSprite(400, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
  
  

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, 1200, 10 , {isStatic:true} );
 	World.add(world, ground);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
packageSprite.depth = helicopterSprite.depth-1
	keyPressed();
	  
	
	
  drawSprites();
 
}

function keyPressed() {
//	if(keyDown(DOWN_ARROW)){
	
		  
		
		
	Body.setStatic(packageBody,false);

 

	//}
 // packageGroup.add(packageSprite)
  
}



