class Stone {
    constructor(x, y,r) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':2,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, 10, options);
      this.radius = r;
      this.image = loadImage("stone.png");
      
      
      World.add(world, this.body);
    }
    display(){
      
      var pos = this.body.position;

       imageMode (CENTER);
      image (this.image,pos.x,pos.y,this.radius,this.radius);


      
    }
  };