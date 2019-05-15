var c_size = 910;
var size = 10;
var w;
var count = 0;

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
    if(count == 0 && field.finished){
	textSize(50);
	fill(255,255,255);
	text('Reach the upper left corner!', 100, 400);
    }

    
}

function keyPressed() {
    if(keyCode == UP_ARROW){
	field.walk(-1,0);
	count++;
    }
    if(keyCode == DOWN_ARROW){
	field.walk(1,0);
	count++;
    }
    if(keyCode == RIGHT_ARROW){
	field.walk(0,1);
	count++;
    }
    if(keyCode == LEFT_ARROW){
	field.walk(0,-1);
	count++;
    }
}

