class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.pointB = pointB
        this.launcher = Matter.Constraint.create(options);
        World.add(world, this.launcher);
    }

    fly(){
        this.launcher.bodyA = null;
    }

    display(){
        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            push();
            if(pointA.x < 220){
                strokeWeight(4);
                stroke(48, 23, 7);
                line(pointA.x, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x, pointA.y, pointB.x + 30, pointB.y - 3); 
            } else {
                strokeWeight(4);
                stroke(48, 23, 7);
                line(pointA.x, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x, pointA.y, pointB.x + 30, pointB.y - 3); 
            }
            pop()
        }
    }
    
}