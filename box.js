class Box{
    constructor(x,y){
        this.box = Bodies.rectangle(x,y,20,30);
        World.add(world,this.box);
    }
    display(){
        push ();
        fill(255,0,255);
        rectMode(CENTRE);
        rect(x,y,20,30);
        pop ();
    }
}