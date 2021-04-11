class Box  {
    constructor(x, y, width, height, angle) {
        var options = {
        'restitution':1,       
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
      var pos = this.body.position;
      fill(0,216,187);
      rect(pos.x,pos.y,this.width,this.height);
      }
 
}