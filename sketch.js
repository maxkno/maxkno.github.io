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
    background(255);
    field.show();
    
    if(!field.finished){
	field.update();
	field.update();
    }
    else{
	field.play();
	noLoop();
    }
    if(field.won){
	count = 0;
	field.reset();
	loop();
    }
    if(count < 3 && field.finished){
	textSize(50);
	fill(255,255,255);
	//noFill();
	noStroke();
	text('Reach the upper left corner!', 100, 400, 800, 50);
	//text('Press arrow keys to navigate', 100, 500, 800, 50);
    }
}

function keyPressed() {
    if(keyCode == UP_ARROW){
	field.walk(-1,0);
	count++;
	redraw();
    }
    if(keyCode == DOWN_ARROW){
	field.walk(1,0);
	count++;
	redraw();
    }
    if(keyCode == RIGHT_ARROW){
	field.walk(0,1);
	count++;
	redraw();
    }
    if(keyCode == LEFT_ARROW){
	field.walk(0,-1);
	count++;
	redraw();
    }
}

