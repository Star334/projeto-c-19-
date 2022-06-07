var boy, dog;
var boyimage, dogimage;




function setup() {
 
  createCanvas(200,200);
  boy = createSprites(180,190,20,20);
  
  dog= createSprite(20,190,10,10);
  

  
}

function draw() {
  background("pink");

    drawSprites();
}