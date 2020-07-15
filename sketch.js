const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,400);
  
  //ground = new Ground(200,200,100,10);
  box1 = new Box(200,100,30,30);
}

function draw() {
  background(185,0,0);  
  drawSprites();
  box1.display();
}