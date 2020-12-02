class Dustbin
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var DustbinPos=this.body.position;		

			push()
			translate(DustbinPos.x, DustbinPos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill("white");
			rect(0,0,this.w, this.h);
			pop()
			
	}

}