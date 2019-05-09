Tile = function(x,y,width){

  this.visited = false;
  this.current = false;
  
  this.w = width;
  this.i = y;
  this.j = x;
  this.x = this.w * x;
  this.y = this.w * y;
  
  this.t = true;
  this.r = true;
  this.b = true;
  this.l = true;
  
    this.reset = function(){
	this.t = true;
	this.r = true;
	this.b = true;
	this.l = true;
	this.visited = false;
	this.current = false;
    }
    
    this.show = function(playing,img){
	if(img){
	    image(img,this.x,this.y,this.w,this.w);
	}
	else{
	    stroke(0);
	    strokeWeight(3);
	    if(this.t){
		line(this.x,this.y,this.x+this.w,this.y);
	    }
	    if(this.r){
		line(this.x+this.w,this.y,this.x+this.w,this.y+this.w);
	    }
	    if(this.b){
		line(this.x+this.w,this.y+this.w,this.x,this.y+this.w);
	    }
	    if(this.l){
		line(this.x,this.y+this.w,this.x,this.y);
	    }
	    if(this.visited && !playing){
		noStroke();
		fill(0,255,0,100);
		rect(this.x,this.y,this.w,this.w); 
	    }
	}
    }

}
