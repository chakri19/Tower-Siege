const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stand, polygon,slingshot, polyImg;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16;
var gameState = "onSling";

var score = 0;

function preload(){
  polyImg = loadImage("circle.png");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
  stand = new Ground(385,300,220,10);

  polygon = Bodies.circle(200,100,20);
  
  World.add(world,polygon);

  slingshot = new SlingShot(polygon,{x:200,y:100})

  //level 1
  b1 = new Box(300,275,30,40);
  b2 = new Box(330,275,30,40);
  b3 = new Box(360,275,30,40);
  b4 = new Box(390,275,30,40);
  b5 = new Box(420,275,30,40);
  b6 = new Box(450,275,30,40);
  b7 = new Box(480,275,30,40);

  //level 2
  b8 = new Box(330,235,30,40);
  b9 = new Box(360,235,30,40);
  b10 = new Box(390,235,30,40);
  b11 = new Box(420,235,30,40);
  b12 = new Box(450,235,30,40);

  //level 3
  b13 = new Box(360,195,30,40);
  b14 = new Box(390,195,30,40);
  b15 = new Box(420,195,30,40);

  //level 4
  b16 = new Box(390,155,30,40);

  Engine.run(engine);
}

function draw() {
  background(0,0,255);  
  rectMode(CENTER);

  imageMode(CENTER);
  image(polyImg,polygon.position.x, polygon.position.y,30,30);

  textSize(30);
  text("Score:"+score,450,40);

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  
  //boxes are calling the Score function
  b1.Score();
  b2.Score();
  b3.Score();
  b4.Score();
  b5.Score();
  b6.Score();
  b7.Score();
  b8.Score();
  b9.Score();
  b10.Score();
  b11.Score();
  b12.Score();
  b13.Score();
  b14.Score();
  b15.Score();
  b16.Score();

  stand.display();
  slingshot.display();
  BackImg();
}

function keyPressed(){
  if (keyCode===32){
    slingshot.attach(polygon);
  }
}
function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
  }
}

function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}

async function BackImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/America/New_York");
  var responseJSON = await response.json();

  var dateTime = responseJSON.datetime;
  var hour = dateTime.slice(11,13);

  if (hour>=06&&hour<=18){
    background(255);
  }
  else{
    background(0);
  }
}