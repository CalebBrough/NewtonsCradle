class Bob {
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution: 1.3,
            friction: 0,
            density: 0.6
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display() {
        var pos=this.body.position;
        push();

        fill("silver");
        noStroke();
        strokeWeight(1);

        ellipse(pos.x, pos.y, this.radius*2, this.radius*2);
        
        pop();
    }
}