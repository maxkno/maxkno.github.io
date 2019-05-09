var Figur;
var keine;
var l;
var l_r;
var Mauer;
var o;
var o_l;
var o_l_r;
var o_r;
var o_u;
var o_u_l;
var o_u_r;
var r;
var u;
var u_l;
var u_l_r;
var u_r;

var array = [];

Imgs = function(){
    Figur= loadImage('./imgs/Figur.png');
    keine= loadImage('./imgs/keine.jpeg');
    l= loadImage('./imgs/l.jpeg');
    l_r= loadImage('./imgs/l_r.jpeg');
    Mauer= loadImage('./imgs/Mauer.jpeg');
    o= loadImage('./imgs/o.jpeg');
    o_l= loadImage('./imgs/o_l.jpeg');
    o_l_r= loadImage('./imgs/o_l_r.jpeg');
    o_r= loadImage('./imgs/o_r.jpeg');
    o_u= loadImage('./imgs/o_u.jpeg');
    o_u_l= loadImage('./imgs/o_u_l.jpeg');
    o_u_r= loadImage('./imgs/o_u_r.jpeg');
    r= loadImage('./imgs/r.jpeg');
    u= loadImage('./imgs/u.jpeg');
    u_l= loadImage('./imgs/u_l.jpeg');
    u_l_r= loadImage('./imgs/u_l_r.jpeg');
    u_r= loadImage('./imgs/u_r.jpeg');

    this.figur = Figur;
    
    //o u l r
    array = [keine, r, l, l_r, u, u_r, u_l, u_l_r, o, o_r, o_l, o_l_r, o_u, o_u_r, o_u_l,Mauer]
    this.getpic = function(o,u,l,r){
	var num = 0;
	if(r){num += 1;}
	if(l){num += 2;}
	if(u){num += 4;}
	if(o){num += 8;}
	return array[num];
    }
}
