class Snow
{
    constructor(x,y)
    {
        var options = {isStatic:false}
        this.body = Bodies.circle(x,y,10)
        World.add(world,this.body);
        this.image=loadImage("snow5.webp")
    }
    display()
    {
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,10)
    }
}