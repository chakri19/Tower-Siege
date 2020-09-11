class Box{
  constructor(x, y, width, height) {
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("download.png");
    this.visibility = 255;
    World.add(world, this.body);
  }

  display(){
    if (this.body.speed<3){
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(this.body.angle);
      imageMode(CENTER);
      image(this.image, 0,0, this.width, this.height);
      pop();
    }
    else {
      World.remove(world,this.body);
      push();
      this.visibility = this.visibility - 5;
      tint(255,this.visibility);
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y, this.width, this.height);
      pop();
    }
  }

  Score(){
    if(this.visibility<0&&this.visibility>-105){
      score++;
    }
  };
}