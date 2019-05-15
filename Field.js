Field = function(xs,w,i0,j0,it,jt){    
    this.s = xs;
    this.field = [];
    this.w = w;
  
    this.stack = [];
    this.firsttime = true;
    this.finished = false;
    this.won = false;

    this.ci = i0;
    this.cj = j0;

    this.si = i0;
    this.sj = j0;

    this.ti = it;
    this.tj = jt;

    this.imgs = new Imgs();
    
    //fill(
    for(var j = 0; j < xs; j++){
	for(var i = 0; i < xs; i++){
	    var t = new Tile(i,j,this.w);
	    this.field.push(t); 
	}
    }
    
    this.reset = function(){
	this.ci = this.si;
	this.cj = this.sj;
	this.won = false;
	this.firsttime = true;
	this.finished = false;
	
	for(var j = 0; j < this.s; j++){
	    for(var i = 0; i < this.s; i++){
		this.fields(i,j).reset();
	    }
	}
	
    }
    
    this.index = function(i,j){
	if(i < 0 || j < 0 || i > this.s - 1 || j > this.s - 1 ){
	    return -1; 
	}
	return i * this.s + j;
    }
    
    this.fields = function(i,j){
	if(i < 0 || j < 0 || i > this.s - 1 || j > this.s - 1 ){
	    return -1; 
	}
	index = i * this.s + j;
	return this.field[index];
    }

    this.play = function(){
	if(this.ci == this.si && this.cj == this.sj){
	    this.won = true;
	}
    }

    this.nachbarn = function(liste,tile){
	var neighbours = [];
	var cii = tile.i;
	var cjj = tile.j;

	
	if(this.fields(cii-1,cjj) != -1 && !this.fields(cii,cjj).t){
	    liste.push(this.fields(cii-1,cjj));
	}
	if(this.fields(cii,cjj+1) != -1 && !this.fields(cii,cjj).r){
	    liste.push(this.fields(cii,cjj+1));
	}
	if(this.fields(cii+1,cjj) != -1 && !this.fields(cii,cjj).b){
	    liste.push(this.fields(cii+1,cjj));
	}
	if(this.fields(cii,cjj-1) != -1 && !this.fields(cii,cjj).l){
	    liste.push(this.fields(cii,cjj-1));
	}
	//return neighbours
    }
	
    
    
    this.show = function(all){
	if(!all){
	    var neighbours = [this.fields(this.ci,this.cj)];
	    for(var sichtweite = 0; sichtweite < 4; sichtweite++){
		for(var i = neighbours.length -1 ; i >= 0; i--){
		    this.nachbarn(neighbours,neighbours[i]);
		}
	    }
	    for(var i = 0; i<neighbours.length; i++){
		ob = neighbours[i].t;
		ub = neighbours[i].b;
		lb = neighbours[i].l;
		rb = neighbours[i].r;
		
		neighbours[i].show(this.finished,this.imgs.getpic(ob,ub,lb,rb));
	    }
	    
	    
	    for(var i = 0; i<neighbours.length; i++){
		ob = neighbours[i].t;
		ub = neighbours[i].b;
		lb = neighbours[i].l;
		rb = neighbours[i].r;
		
		neighbours[i].show(this.finished,this.imgs.getpic(ob,ub,lb,rb));
	    }

	}
	else{
	    for(var i = 0; i < size; i++){
		for(var j = 0; j < size; j++){
		    ob = this.fields(i,j).t;
		    ub = this.fields(i,j).b;
		    lb = this.fields(i,j).l;
		    rb = this.fields(i,j).r;

		    //image()
		    this.fields(i,j).show(this.finished,this.imgs.getpic(ob,ub,lb,rb));
		    //this.fields(i,j).show(this.finished);
		    //noStroke();
		    //fill(255,0,0);
		    //rect(this.cj * this.w ,this.ci * this.w , this.w, this.w);
		}
	    }
	}
	
	if(this.finished){
	    stroke(0);
	    var dicke = 1000;
	    noFill();
	    strokeWeight(dicke);
	    for(var ii = 0; ii < 50; ii++){
		stroke(0,20);
		circle((this.cj + 0.5)*this.w,
		       (this.ci + 0.5)* this.w,
		       (1.0 + 2.0/50 * ii)*this.w + dicke*1.0 / 2);		
	    }
 	    
	    stroke(0);
	    strokeWeight(dicke);
	    circle((this.cj + 0.5)*this.w,
		   (this.ci + 0.5)* this.w,
		   3.0*this.w + dicke*1.0 / 2);
	    
	    image(this.imgs.figur,
		  (this.cj+1.5/7)*this.w,
		  (this.ci+1.0/7)*this.w,
		  this.w*4.0/7,this.w*5.0/7);
	}
    }
    
    this.walk = function(i,j){
	if(this.finished){
	    if(i == -1 && j == 0){
		if(this.fields(this.ci,this.cj).t){
		    return;
		}
	    }
	    else if(i == 0 && j == 1){
		if(this.fields(this.ci,this.cj).r){
		    return;
		}
	    }
	    else if(i == 1 && j == 0){
		if(this.fields(this.ci,this.cj).b){
		    return;
		}
	    }
	    else if(i == 0 && j == -1){
		if(this.fields(this.ci,this.cj).l){
		    return;
		}
	    }
	    
	    this.ci += i;
	    this.cj += j;
	}
	else{
	    return;
	}
    }
    
    this.update = function(){
	if(this.firsttime){
	    this.stack.push(this.fields(this.ci,this.cy));
	    this.fields(this.ci,this.cj).visited = true;
	    this.firsttime = false;
	}
	else{
	    var neighbours = [];
	    if(this.fields(this.ci-1,this.cj) != -1 && !this.fields(this.ci-1,this.cj).visited){
		neighbours.push([this.fields(this.ci-1,this.cj),-1,0,0]);
	    }
	    if(this.fields(this.ci,this.cj+1) != -1 && !this.fields(this.ci,this.cj+1).visited){
		neighbours.push([this.fields(this.ci,this.cj+1),0,1,1]);
	    }
	    if(this.fields(this.ci+1,this.cj) != -1 && !this.fields(this.ci+1,this.cj).visited){
		neighbours.push([this.fields(this.ci+1,this.cj),1,0,2]);
	    }
	    if(this.fields(this.ci,this.cj-1) != -1 && !this.fields(this.ci,this.cj-1).visited){
		neighbours.push([this.fields(this.ci,this.cj-1),0,-1,3]);
	    }
    
	    //4.1
	    if(neighbours.length != 0 && neighbours.length != null){
		//4.1.1
		var r = floor(random(0,neighbours.length));
		var step = neighbours[r][0];

		
		var dirx = neighbours[r][2];
		var diry = neighbours[r][1];
		var dir  = neighbours[r][3];
		
		//4.1.2
		if(dir == 0){
		    this.field[this.index(this.ci,this.cj)].t = false;
		    this.field[this.index(this.ci-1,this.cj)].b = false;
		}
		
		if(dir == 1){
		    this.field[this.index(this.ci,this.cj)].r = false;
		    this.field[this.index(this.ci,this.cj+1)].l = false;
		}
		if(dir == 2){
		    this.field[this.index(this.ci,this.cj)].b = false;
		    this.field[this.index(this.ci+1,this.cj)].t = false;
		}
		if(dir == 3){
		    this.field[this.index(this.ci,this.cj)].l = false;
		    this.field[this.index(this.ci,this.cj-1)].r = false;
		}
        
		//4.1.3-4
		this.stack.push(step);
		step.visited = true;
		this.cj = this.cj + dirx;
		this.ci = this.ci + diry;        
	    }
	    //4.2
	    else{
		curr = this.stack.pop();
		if(curr){
		    this.cj = curr.j;
		    this.ci = curr.i;
		}
		else if (this.finished == false && this.ci != this.ti && this.cj != this.tj){
		    this.ci = this.ti;
		    this.cj = this.tj;
		    this.finished = true;
		}
	    }
	}
    }
}
