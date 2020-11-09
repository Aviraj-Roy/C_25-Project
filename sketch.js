
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{	
    paper=loadImage("paper.png");
    dustbingreen = loadImage("dustbingreen.png");
}

var ground;
var w1,w2,w3;
var paperSprite, packageBody;
var dustbinSprite;

function setup() 
{
	createCanvas(1200, 1000);

    groundSprite=createSprite(width/2, height-35, width,10);
    groundSprite.shapeColor=color("white");    
	
    //CreatingSpritesForWallsOfDustbin
    w1=createSprite(1000, height-50, 200, 20);
	w1.shapeColor=color("red");    
    w2=createSprite(900, height-90, 20, 100);
	w2.shapeColor=color("red");    
    w3=createSprite(1100, height-90, 20, 100);
    w3.shapeColor=color("red");   
     
    engine = Engine.create();
	world = engine.world;

    ground = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
	World.add(world, ground);
    
    //Create the Bodies Here.
    w1 = Bodies.rectangle(1000, height-50, 200, 20 , {isStatic:true} );
    World.add(world, w1);
    
    w2 = Bodies.rectangle(900, height-90, 20, 100 , {isStatic:true} );
    World.add(world, w2);
    
    w3 = Bodies.rectangle(1100, height-90, 20, 100 , {isStatic:true} );
    World.add(world, w3);
    
    dustbinSprite = createSprite(1000, height-200, 20,20);
    dustbinSprite.addImage(dustbingreen);

    paperSprite=createSprite(100, height-55, 20, 20);
	paperSprite.addImage(paper);
	paperSprite.scale=0.2;
    packageBody = Bodies.circle(100, height-55, 20,{ 'restitution':1, 'friction':0.5, 'density':3, isStatic:false}, 5);
	World.add(world, packageBody);
    
	Engine.run(engine);
  
}


function draw() 
{
    background(0);

    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,width,10);

    rectMode(CENTER);
    rect(w1.position.x,w1.position.y,200,20);

    rectMode(CENTER);
    rect(w2.position.x,w2.position.y,20,100);

    rectMode(CENTER);
    rect(w3.position.x,w3.position.y,20,100);

    ellipseMode(RADIUS);
    ellipse(packageBody.position.x, packageBody.position.y, 20 , 20);
    
    paperSprite.x= packageBody.position.x; 
    paperSprite.y= packageBody.position.y; 

    drawSprites();

    keyPressed();
}

function keyPressed() 
{
 if (keyCode === UP_ARROW) 
 {
    // Look at the hints in the document and understand how to make the package body fall only on
    Body.applyForce(packageBody,packageBody.position,{x:10,y:-9});
 }
}