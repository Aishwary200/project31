const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

function setup() {
  createCanvas(800,480);
  engine=Engine.create();
  world=engine.world;
  for(var i=0; i<=width; i=i+80 ){
    divisions.push(new Division(i,height-divisionHeight/2,10,divisionHeight))
    }
    for(var j=40; j<=width; j=j+50 ){
      plinkos.push(new Plinko(j,75,10))
      }
      for(var j=15; j<=width; j=j+50 ){
        plinkos.push(new Plinko(j,175,10))
      }

  Engine.run(engine);
}

function draw() {
  background("black"); 
  Engine.update(engine); 
   
  
}