
var box;
function setup() {
  createCanvas(400,400);
  background(30);
 
}

function draw() 
{ 
  fill("white");
  text("To create a red background, press the up arrow",70,200);
  text("To create a green background, press the left arrow",70,220);
 

  if(keyIsDown(UP_ARROW)){
   background("red");
  }
if(keyIsDown(LEFT_ARROW)){
  background("green");
}

drawSprites();
}

