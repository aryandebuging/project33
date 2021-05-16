const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
function preload(){
  bgImg=loadImage("snow1.jpg");
  char1Img= loadImage("lold.png");
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  char1=createSprite(400, 300, 50, 50);
  char1.addImage("char",char1Img)


  snow=new Snow(200,200);
}

function draw() {
  background(bgImg);  
  if(keyDown("up")){
    char1.y -=5;
  }
  else if(keyDown("down")){
    char1.y +=5;
  }
  else if(keyDown("right")){
    char1.x +=5;
  }
  else if(keyDown("left")){
    char1.x -=5;
  }
  snow.display();
  drawSprites();
}