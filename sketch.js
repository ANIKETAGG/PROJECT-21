const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,myWorld;
var ground, ball;
var box1,box2;



function setup() {
  createCanvas(400,400);

  engine = Engine.create()
  myWorld = engine.world;
  box1=new Box(200,200,50,50);
  box2=new Box(200,100,50,80);
  ground= new Ground(200,390,400,10);


  
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);

  box1.display()
  box2.display()
  ground.display()
}