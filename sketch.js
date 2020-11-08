const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

function setup() {
  createCanvas(800,580);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(width/2,height,width,20)
  for(var i=0; i<=width; i=i+80 ){
    divisions.push(new Division(i,470,10,200))
    
    }
    for(var j=40; j<=width; j=j+50 ){
      plinkos.push(new Plinko(j,75,10))
      
      }
      for(var j=15; j<=width; j=j+50 ){
        plinkos.push(new Plinko(j,175,10))
      }
      for(var j=40; j<=width; j=j+50 ){
        plinkos.push(new Plinko(j,275,10))
      }
    if(frameCount%60===0){
      particles.push(new Particle(random(width/2-10,width/2+10),10,10))
    }
  Engine.run(engine);
}

function draw() {
  background("black"); 
  Engine.update(engine); 
   ground.display();
   for (var j = 0; j < plinkos.length; j++) {
      plinkos[j].display(); 
    }
    for (var i = 0; i < divisions.length; i++) {
      divisions[i].display();
     }

      for (var k = 0; k < particles.length; k++) {
        particles[k].display();
       }
}