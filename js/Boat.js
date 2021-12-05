class Boat {

  constructor(x, y, width, height,boatpos) {
    var options = {
      isStatic: true
    };
    this.boatPosition=boatpos
    this.image=loadImage("assets/boat.png")
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    World.add(world, this.body);
  }
  display() {
    var angle=this.body.angle
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
  rotate(angle)
    imageMode(CENTER);
  image(this.image,0, this.boatPosition, this.width, this.height);
    pop();
  }
}
