class Paper{
    constructor(x,y,radius){
        var options ={
        isStatic:false,
        restitution:0.7,
        friction:0.5,
        density:1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.r = radius;
        World.add(world, this.body);
        this.image = loadImage('paper.png');
    }
        display(){
            var pos = this.body.position;
            push();
            translate(pos.x,pos.y);
            ellipseMode(RADIUS);
            // ellipse(0,0,this.r,this.r);
            imageMode(CENTER);
            image(this.image,0,0,this.r,this.r);
            pop();
        }
            
    }