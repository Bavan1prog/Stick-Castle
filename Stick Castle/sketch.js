const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var door;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  box1 = new Box (720, 350, 100, 50);
  box2 = new Box(-24,350,100,50);
  box3 = new Box(30,200,70,250);
  box4 = new Box(680,200,70,250);
  box5 = new Box(250,200,300,400);
  box6 = new Box(580,120,80,300);
  box7 = new Box(115,120,80,300);
  box8 = new Box(385,65,20,135);
  box9 = new Box(405,65,99,50);
  door = createSprite(390,370,100,150);
}

function draw() {
  background(0,0,0); 
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  drawSprites();
}