
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, dustbin2, dustbin3, paper, ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,450,50);
	ground=new Ground(width/2,593,1250,20);
	dustbin1=new Dustbin(813,495,25,180);
	dustbin2=new Dustbin(970,495,25,180);
	dustbin3=new Dustbin(900,570,150,25);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	 Body.applyForce(paper.body,paper.body.position,{x:115,y:-115});
  
	}
}