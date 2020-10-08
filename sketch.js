
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;
var dustbin,dustbin1,dustbin2;

function preload() {
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(400,10,70);
	World.add(world,paper);
	ground = new Ground(400,650,800,10);
	World.add(world,ground);
	dustbin = new Dustbin(600,640,200,20);
	World.add(world,dustbin);
	dustbin1 = new Dustbin(510,600,20,100);
	World.add(world,dustbin1);
	dustbin2 = new Dustbin(710,600,20,100);
	World.add(world,dustbin2);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255,255,255);

  ground.display(); 
  dustbin.display();
  dustbin1.display();
  dustbin2.display();
  paper.display();
  
  keyPressed();

  drawSprites();
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:-9});
 
  	}
}