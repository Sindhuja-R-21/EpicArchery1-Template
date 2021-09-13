const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;
var computer, computerBase;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  computerBase = new ComputerBase(width - 300,random(450, height - 300),180,150);
  computer = new Computer(width - 280,computerBase.body.position.y - 153,50,180);

//Create Object for playerBase and player


}

function draw() {
  background(189);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  computerBase.display();
  computer.display();

  //Display playerBase and player
  

}
