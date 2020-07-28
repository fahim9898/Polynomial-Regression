var x_values=[];
var y_values=[];
var x1,x2,x3,b;
var model;
var lr=0.1;
function setup() {
  // Setup canvas
  canvas = createCanvas(windowWidth/2, windowHeight/1.5);
  canvas.position(windowWidth/4, windowHeight/6)
  body = document.getElementById("body");
  body.style.backgroundColor = "#7e90ab"

  // Setup all variables
  x1=tf.variable(tf.scalar(random(1)));
	x2=tf.variable(tf.scalar(random(1)));
	x3=tf.variable(tf.scalar(random(1)));
	x3=tf.variable(tf.scalar(random(1)));
	x4=tf.variable(tf.scalar(random(1)));
	x5=tf.variable(tf.scalar(random(1)));
	x6=tf.variable(tf.scalar(random(1)));
	x7=tf.variable(tf.scalar(random(1)));
	b =tf.variable(tf.scalar(random(1)));
  
  // Back propagation method
	model=tf.train.sgd(lr);
}

function draw() {
  background("#303a52");
	stroke(255);
  strokeWeight(6);
  
  // Redraw all selected points
  if(x_values.length!=0){
    
    for(var i=0;i<x_values.length;i++){
  	  var map_x=map(x_values[i],0,1,0,width);
      var map_y=map(y_values[i],1,0,0,height);
      point(map_x,map_y);
    }


  // Update weights and bias (Training)
  if(x_values.length>0){      
    tf.tidy(()=>{
    model.minimize(function(){
          return( loss(x_values,y_values));
    });
      
    });
  }
    
  // Draw line Using x-axis points value predict y-axis value
  if(x_values.length == 0) return;
   
  var l_x1,l_x2,l_y1,l_y2;
  beginShape();
    for(var j=0;j<1.01;j=j+0.05){ 
    strokeWeight(1);
    noFill();
    tf.tidy(()=>{
  
      l_x1=[j];
      l_y1=prediction(l_x1);
      map_x1=map(l_x1[0],0,1,0,width);
      map_y1=map(l_y1.get(0),1,0,0,height);
        vertex(map_x1,map_y1);
      
      });
    }
  endShape();
  // console.log(tf.memory().numTensors);
  }
}
  
// Predict point according x-axis point   ( Using predict(X-axis Point)=> Return Y-axis Point)
function prediction(x){
     tf_x= tf.tensor1d(x);
      return( tf_x.pow(tf.scalar(7)).mul(x1)
        .add(tf_x.pow(tf.scalar(6)).mul(x2))
        .add(tf_x.pow(tf.scalar(5)).mul(x3))
        .add(tf_x.pow(tf.scalar(4)).mul(x4))
        .add(tf_x.pow(tf.scalar(3)).mul(x5))
      	.add(tf_x.square().mul(x6))
      	.add(tf_x.mul(x7))
        .add(b)
      	);
  }


// When Mose is pressed then add dots on screeen 
function mousePressed(){
	var x=map(mouseX,0,width,0,1);
  var y=map(mouseY,0,height,1,0);
  var IsInRect = IsInRectWraper(0, 0, width, height);
  if (IsInRect(mouseX, mouseY)) {
    x_values.push(x);
    y_values.push(y);
  } else {
    console.log("out")
  }
}

function IsInRectWraper(x, y, w, h) {
  return (tx, ty) => {
    if (tx >= x && tx <= x + w && ty >= y && ty <= y + h) {
      return true;
    } else {
      false
    }
  }
}

// Loss Function to update neural network
function loss(x,y){
  var pre_t_y=prediction(x);
  var t_y=tf.tensor1d(y);      
  return (t_y.sub(pre_t_y).square().mean());                               // Type of loss function
  /*
  return (tf.losses.meanSquaredError(t_y,pre_t_y));                        // MSE Loss
  return (tf.losses.logLoss(t_y,pre_t_y));                                 // Log Loss
  */
}