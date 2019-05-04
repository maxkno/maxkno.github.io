var r = [0xFF, 0xFF,0xFFF, 0x00, 0x00];
var g = [0x00, 0x80, 0xFF, 0xFF, 0xFF];
var b = [0x00, 0x00, 0x00, 0xFF, 0x00];

//  int my_color;

function Tile(x,y,z,vert,grid_size){
    var my_color = floor(random(0,r.length));
    var speed = 0.1;
    var locked = false;
    var zoom = 1;
    this.x = x;
    this.y = y;
    this.z = z;
    this.vert = vert;
    if(vert){
	this.x1 = x;
	this.y1 = y-1;
    }
    else{
	this.x1 = x;
	this.y1 = y-1;
    }
    this.grid_size = grid_size;

    this.move = function(){
	  this.z -= speed;
    }

    this.show = function(){
	    fill(r[my_color],g[my_color],b[my_color]);     
	    //fill(my_color);
	    noStroke();
        
	    var p_x = 10*this.x;
	    var p_y = 10*this.y;
	    var p_z = 6*this.z;
	    translate(-this.grid_size/2*10+5,-this.grid_size/2*10,0);
	    if (this.vert == true){
	        rotateZ(PI/2);
	        translate(p_y, -p_x, p_z);
	    }
	    else{
	        translate(p_x+5, p_y+5, p_z);
	    }
        
        //box(50);
	    box(zoom * 20,zoom * 10,zoom * 6);
        /*
        translate(5+2.5,2.5,3.55);
        drawCylinder(10,1.5,1.5,1.1);
        translate(-5,0,0);
        drawCylinder(10,1.5,1.5,1.1);
        translate(-5,0,0);
        drawCylinder(10,1.5,1.5,1.1);
        translate(-5,0,0);
        drawCylinder(10,1.5,1.5,1.1);
        translate(0,-5,0);
        drawCylinder(10,1.5,1.5,1.1);
        translate(5,0,0);
        drawCylinder(10,1.5,1.5,1.1);
        translate(5,0,0);
        drawCylinder(10,1.5,1.5,1.1);
        translate(5,0,0);
        drawCylinder(10,1.5,1.5,1.1);
        translate(-7.5,2.5,-3.55);
        */
	    if (this.vert == true){
	        translate(-p_y, p_x, -p_z);
	        rotateZ(-PI/2);
	    }
	    else{
	        translate(-p_x-5, -p_y-5, -p_z);
	    }
	    translate(this.grid_size/2*10-5,this.grid_size/2*10,0);  
        
    }
    drawCylinder = function(sides, r1, r2, h){
      var angle = 360 / sides;
      var halfHeight = h / 2;
      // top
      beginShape();
      for (var i = 0; i < sides; i++) {
          var x = cos( radians( i * angle ) ) * r1;
          var y = sin( radians( i * angle ) ) * r1;
          vertex( x, y, -halfHeight);
      }
      endShape(CLOSE);
      // bottom
      beginShape();
      for (var i = 0; i < sides; i++) {
          var x = cos( radians( i * angle ) ) * r2;
          var y = sin( radians( i * angle ) ) * r2;
          vertex( x, y, halfHeight);
      }
      endShape(CLOSE);
      // draw body
      beginShape(TRIANGLE_STRIP);
      for (var i = 0; i < sides + 1; i++) {
          var x1 = cos( radians( i * angle ) ) * r1;
          var y1 = sin( radians( i * angle ) ) * r1;
          var x2 = cos( radians( i * angle ) ) * r2;
          var y2 = sin( radians( i * angle ) ) * r2;
          vertex( x1, y1, -halfHeight);
          vertex( x2, y2, halfHeight);
      }
      endShape(CLOSE);
    } 
  
    
}
