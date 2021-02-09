//namespacing or nicknaming
//like a car
//Engine = runs the objects
// Bodies = outer structure
// World = where objects belong
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//for the ABG 
//Declaring variables
var engine, world;
var ground;
var ball;

function setup() {
  //creates a backgroung
  createCanvas(800,400);

  //creating Angry Birds Game engine from the main Matter.Engine class
  engine = Engine.create();
  // the world of ABG is same as engine's world(The one on line 21)
  world = engine.world;

  ground = new Ground(400,height,800,20)
  
  box1 = new Box(400,300,50,50);
  box2 = new Box(440,200,50,100);

}

function draw() {
  background(0);  
  Engine.update(engine);

 
  box1.display();
  box2.display();

  ground.display();
}
