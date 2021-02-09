class Box
{
    //the part that is similar to setup function
     constructor(x,y,width,height){
         var options = {
             restitution:0.8,
            //makes the object heavy or light
             density:1,
             friction:3
         }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.height = height;
        this.width = width;
        World.add(world,this.body);

     }

     
     //like draw function
     display(){
         push()
        var pos = this.body.position;
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}