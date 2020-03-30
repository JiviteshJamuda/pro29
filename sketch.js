//creating constants for Engine ,World ,Bodies and Cosntraint
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//variables for engine and world 
var engine, world;
//variables for ball and the constraint string
var ball,  string2;

function setup(){
    var canvas = createCanvas(650,400);
    engine = Engine.create();
    world = engine.world;

    //features of the ball
    var ballOpt = {
        restitution : 0.1,
        density : 0.1
    };
    //creating and adding the ball
    ball = Bodies.circle(105,305,10,ballOpt);
    World.add(world,ball);

    //creating the constraint string
    string2 = new String(ball.body,{x:105,y:305});
}


function draw(){
    //to stop the objects from redrawing
    background("cyan");
    //updating the Engine
    Engine.update(engine);
   
    //displaying the constraint string
    string2.display();

    //displaying the ball as an ellipse
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,25);

    
}