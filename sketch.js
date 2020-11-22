const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var STEVE;
var myworld;
var TAILOR
var stella


function setup() {
  createCanvas(400,400);
   STEVE = Engine.create(); //STEVE.world
   myworld = STEVE.world;

   var goku = {
     restitution: 1
   }

   stella = Bodies.circle(300,200,20,goku)

   World.add(myworld,stella)

  var options = {
  isStatic : true       
  }


   TAILOR = Bodies.rectangle(200,380,400,30,options)
   World.add(myworld,TAILOR)

   console.log(TAILOR.position.y)
  
}

function draw() {
  Engine.update(STEVE)
  background(0);  
rectMode(CENTER)
  rect(200,200,100,100)
  fill("cyan")
  rect(TAILOR.position.x,TAILOR.position.y,400,30)
  ellipseMode(RADIUS)
  ellipse(stella.position.x,stella.position.y,20,20)
  
}
