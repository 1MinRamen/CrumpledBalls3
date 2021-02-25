class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 40
        }
        this.bodyA = bodyA;
        this.pointB = pointB;
        this.launch = Constraint.create(options);
        World.add(world, this.launch);
    }
    attach(body){
        this.launch.bodyA = body;
    }
    fly(){
        this.launch.bodyA = null;
    }
    display(){
        if(this.launch.bodyA){
            strokeWeight(7);
            var pointA = this.launch.bodyA.position;
            var pointB = this.pointB;
            
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}