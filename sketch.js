// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
 
    var canvas = createCanvas(1200,400);

    ground = new Ground(600,height,1200,20);
    canon = new CanonBall(185,518);
    tanker1 = new Tanker(200,350,45,30);
    tanker2 = new Tanker(200,320,45,30);
    
}

function draw() {
// Remember to update the Matter Engine and set the background.
background()
Engine.update(engine);

ground.display();

}


function keyReleased() {
    // Call the shoot method for the cannon.
}