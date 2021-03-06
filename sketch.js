const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1;

function preload() {
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(360, 300, 10);
	bob2 = new Bob(380, 300, 10);
	bob3 = new Bob(400, 300, 10);
	bob4 = new Bob(420, 300, 10);
	bob5 = new Bob(440, 300, 10);
	roof = new Roof(400, 50, 100, 20);
	rope1 = new Rope(bob1.body, roof.body, -40, 0);
	rope2 = new Rope(bob2.body, roof.body, -20, 0);
	rope3 = new Rope(bob3.body, roof.body, 0, 0);
	rope4 = new Rope(bob4.body, roof.body, 20, 0);
	rope5 = new Rope(bob5.body, roof.body, 40, 0);

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(255);

	if (keyWentDown(UP_ARROW)) {
		Body.applyForce(bob1.body, bob1.body.position, {x:-3.5, y: 0});
	}

	roof.display();

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	drawSprites();
}



