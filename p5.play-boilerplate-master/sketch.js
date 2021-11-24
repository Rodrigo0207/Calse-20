var fixedrect, movingrect;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  fixedrect = createSprite(200,200,50,80);
  fixedrect.shapeColor= "blue";
  movingrect = createsprite(400,200,80,30)
  movingrect.shapeColor = "green"
  
}

function draw() {
  background(0,0,0);
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  
  if (movingrect.x-fixedrect < fixedrect.width/2 + movingrect.width/2 && movingrect.x-fixedrect < fixedrect.width/2 + movingrect.width/2
    && movingrect.y-fixedrect < fixedrect.height/2 + movingrect.height/2 && movingrect.y-fixedrect < fixedrect.height/2 + movingrect.height/2){
    fixedrect.shapeColor = "red"
    movingrect.shapeColor = "red"
  }
  else{
    fixedrect.shapeColor = "blue"
    movingrect.shapeColor = "green"
  }




  drawSprites();
}