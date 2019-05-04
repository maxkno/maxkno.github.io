var grid_size = 10;
var Steine = [];
var profile;
var _x;
var _y;

var angle = 0;
function setup() {
    createCanvas(1200, 800, WEBGL);

    var _vert;
    profile = new Profile(grid_size);
  
    for(var i = 0; i<500; i++){
      _vert = (random(0,1) < 0.5);
      if(_vert){
        _x = floor(random(0,grid_size));
        _y = floor(random(1,grid_size));     
     }
      else{
        _x = floor(random(0,grid_size-1));
        _y = floor(random(0,grid_size));          
      }
      Steine[i] = new Tile(_x,_y,(2*i+1),_vert,grid_size) ;
    }
}

function draw() {
    background(0);
    fill(51);
    noStroke();
    rectMode(CENTER);
    rect(0,0,grid_size*10,grid_size*10);
    translate(0,0,3.01);
  
    camera(200,200,300,0,0,0,0,0,-1);
    //background(255);
    for(var i = 0; i<500; i++){
       Steine[i].show();

       if (!Steine[i].locked){
         profile.update(Steine[i]);
       }
     
    }
    /*
    for(var i = 0; i<500; i++){
      Steine[i].show();
    }
    */
    //s.show();
    //s.move();
    //noStroke();
    //fill(255,0,0);
    rotateX(angle);
    rotateY(angle);
	//box(50);
    angle += 0
    //camera(5,5,5);
}
