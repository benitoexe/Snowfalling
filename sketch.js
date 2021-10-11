const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var snow = [];
var bgMusic;

function preload(){
  bgImg = loadImage("snowybg.jpg")
  bgMusic = loadSound("Hans Zimmer - Dust (Interstellar Soundtrack).mp3");
}

function setup() {
  createCanvas(windowWidth, 800);
  engine = Engine.create();
  world = engine.world;
  bgMusic.loop();
    
}

function draw() {
  background(bgImg);
  textSize(20);

  Engine.update(engine);

  //display the paricles 
  if(frameCount%10==0){
   snow.push(new Snow(random(width/2-400,width/2+400),10,5));
  }

  for(var j=0; j< snow.length; j++){
   snow[j].display()
  }
}