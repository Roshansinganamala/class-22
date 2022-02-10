class Cannon{
    constructor(x,y,h,w,angle){
        this.x = x
        this.y = y
        this.h = h
        this.w = w
        this.angle = angle
        this.cannon_base = loadImage("assets/cannonBase.png");
        this.cannon_image = loadImage("assets/canon.png")

    }
     display(){
        //code to create cannon top
        push();
        translate(this.x,this.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.cannon_image,0,0,this.w,this.h);
        
        pop();

        //code to create cannon bottom
        image(this.cannon_base,70,20,200,200);
        noFill();
     }
    }