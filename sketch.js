
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var paperBall;
var trashcan;
var gamestate = "onLaunch";

function preload(){
	trashcan = loadImage('dustbingreen.png');
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBall = new Paper(100,100,50);
	ground = new Ground(700,700,1500,50);
	bottomWall = new Walls(900,650,130,5);
	leftWall = new Walls(837,600,5,100);
	rightWall = new Walls(963,600,5,100);
	launcherOBJ = new Launcher(paperBall.body,{x:250,y:150});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

   var dustbin = createSprite(900,600,100,100);
   
   dustbin.addImage(trashcan);
   dustbin.scale = 0.5;

paperBall.display();
ground.display();
bottomWall.display();
rightWall.display();
leftWall.display();
launcherOBJ.display();

  
  drawSprites();

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:454,y:-500});
	}
}

function mouseDragged(){
	if (gamestate !== "Launched"){
	Matter.Body.setPosition(paperBall.body, {x: mouseX , y: mouseY});
	}
}

function mouseReleased(){
	gamestate = "Launched";
	launcherOBJ.fly();
}