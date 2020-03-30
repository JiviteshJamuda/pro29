class String{
constructor(bodyA,pointB){
    var opt = {
        bodyA : bodyA,
        pointB : pointB,
        stiffness : 1,
        lenght : 10
    };

    this.pointB = pointB
    this.string = Constraint.create(opt);
    World.add(world,string);
    
 }

    fly(){
        this.string.bodyA = null;
    }

    attach(body){
        this.string.bodyA = body;
    }
  
 display(){
  if (this.sling.bodyA){
    var pointA = this.string.bodyA.position;
    var pointB = this.pointB;
    
    stroke(8)
    line(pointA.x,pointA.y,pointB.x,pointB.y);
  }

 }

}

