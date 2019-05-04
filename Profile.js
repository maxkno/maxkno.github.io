function Create2DArray(rows) {
  var arr = [];

  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }

  return arr;
}

function Profile(grid_size){
  var profile = Create2DArray(grid_size);
  //this.profile = new int[grid_size][grid_size];
  for(var i = 0; i<grid_size; i++){
    for(var j = 0; j<grid_size; j++){ 
      profile[i][j] = 0;
    }
  }

  
  this.getHeight = function(x, y, vert){
    var x1;
    var y1;
    if (vert){
      x1 = x;
      y1 = y - 1;
    }else{
      x1 = x + 1;
      y1 = y;  
    }
    var max = profile[x][y] > profile[x1][y1] ? profile[x][y] : profile[x1][y1];
    return max;
  }
  
  this.setHeight = function(x, y, vert){
    var x1,y1;
    if (vert){
      x1 = x;
      y1 = y - 1;
    }else{
      x1 = x + 1;
      y1 = y;  
    }
    var h = this.getHeight(x,y,vert);
    profile[x][y] = h+1;
    profile[x1][y1] = h+1;
    return h+1;
  }
  
  this.update = function(stein){
    if (!stein.locked){
      if (!stein.locked && stein.z > this.getHeight(stein.x,stein.y,stein.vert)){
        stein.move(); 
      }
      else{
        stein.locked = true;
        stein.z = this.setHeight(stein.x,stein.y,stein.vert) - 1;
      }
    }
  }  
}
