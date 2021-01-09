class ball {
    constructor(x,y,r){
      var options = {
        'isStatic' : false,
        'restitution' : 1,
        'friction' : 0,
        'density':0.8,

      }
      this.body = Bodies.circle(x,y,r,options)
      this.r = r;
      World.add(world,this.body);

    }
    display(){
      ellipseMode(RADIUS);
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipse(0,0,this.r,this.r);
        pop(); 
    }
}