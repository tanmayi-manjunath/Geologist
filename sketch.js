const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var rubber1;
var stone1;
var iron1;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

  rubber1 = new Rubber(900,500,60);

  stone1 = new stone(600,400,100,150);

  iron1 = new iron(300,350);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    rubber1.display();
    hammer.display();
    stone1.display();
    iron1.display();
    
 
}