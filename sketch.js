var c_size = 910;
var size = 10;
var w;

var field;

function setup() {
    createCanvas(c_size, c_size);
    w = (width - 10)/ size;
    field = new Field(size,w,0,0,size-1,size-1);
    //frameRate(4);
}

function draw() {
    //frameRate(2);
    background(220);

    field.show();
    if(!field.finished){
	field.update();
	field.update();
    }
    else{
	field.play();
    }
    if(field.won){
	field.reset();
    }

}

function keyPressed() {
    if(keyCode == UP_ARROW){
	field.walk(-1,0);
    }
    if(keyCode == DOWN_ARROW){
	field.walk(1,0);
    }
    if(keyCode == RIGHT_ARROW){
	field.walk(0,1);
    }
    if(keyCode == LEFT_ARROW){
	field.walk(0,-1);
    }
}

