const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var ground;
var particles = [];
var plinkos = [];
var divisions =[];

var divisionHeight=300;

var score = 0;

function setup() {
  createCanvas(500,650);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);

  //divisions

  for (var k = 10; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //Plinkos

  for (var j = 25; j <=width; j=j+50){
    plinkos.push(new Plinko(j,30));
  }
  for (var j = 50; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,110));
  }
  for (var j = 25; j <=width; j=j+50){
    plinkos.push(new Plinko(j,190));
  }
  for (var j = 50; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,270));
  }





}

function draw() {
  background("black");
  
  Engine.update(engine);
  text("Score : "+score,20,50);
  ground.display();

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  if(frameCount % 20===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    score++;
  }

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
  
}