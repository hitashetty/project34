const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground1;
var engine, world;
var ball1;
var ball2;
var ball3;
var ball4;
var ball5;

var rope1;
var rope2;
var rope3;
var rope4;
var rope5;


function setup(){
    createCanvas(1440,800);
    engine = Engine.create();
    world = engine.world;

    //creating the balls
    ball1 = new ball(500,500,40);
    ball2 = new ball(550,500,40);
    ball3 = new ball(600,500,40);
    ball4 = new ball(650,500,40);
    ball5 = new ball(700,500,40);

    //creating ground
  //  ground1 = new ground(650,140,400,20);

    //creating rope
    rope1 = new rope({x : 500,y : 150},ball1.body);
    rope2 = new rope({x : 580,y : 150},ball2.body);
    rope3 = new rope({x : 660,y : 150},ball3.body);
    rope4 = new rope({x : 740,y : 150},ball4.body);
    rope5 = new rope({x : 820,y : 150},ball5.body);

}
function draw(){
    background("black");
    Engine.update(engine);
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    //displaying the ground
    fill("black");
    stroke("white");
    //ground1.display();
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();

}

    function mouseDragged(){
            Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
  }