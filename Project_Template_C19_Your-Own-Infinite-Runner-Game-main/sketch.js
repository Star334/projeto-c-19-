
var boy,dog,cenario;
var obstaculogrupo;
var bebidasgrupo,bebida,cha,banana;
var bebidaimage, chaimage, bananaimage;
var boyimage, dogimage, backgroundx;
var PLAY = 1;
var END = 0
var gameState = PLAY;




function preload(){
    boyimage= loadImage("boyimage.png");
    dogimage= loadImage("dogimage.png");
    backgroundx = loadImage("cc.jpg");
    bebidaimage = loadImage("drinkk.png");
    bananaimage = loadImage("banana.png");
    chaimage = loadImage("cha.png");
}

function setup() {
 
createCanvas(530,200);

cenario=createSprite(300,8);
cenario.addImage(backgroundx);
cenario.velocityX=-2;

// ground = createSprite(400,180,600,20);
// ground.x = ground.width /2;


invisibleGround = createSprite(400,200,410,30);
invisibleGround.visible = false;
score=0;

text("Score:"+ score, 470,50);


boy = createSprite(380,115,20,20);
dog = createSprite(57,150,20,20);
// bebida = createSprite(750,100,2,2);
// banana = createSprite(510,100,2,2);
// cha = createSprite(520,100,2,2);

boy.addImage(boyimage);
boy.scale = 0.3


dog.addImage(dogimage);
dog.scale = 0.3

// bebida.addImage(bebidaimage);
// bebida.scale = 0.2;
// bebida.velocityX = -0.9;

obstaculogrupo = new Group ();
bebidasgrupo = new Group();

// banana.addImage(bananaimage);
// banana.scale = 0.2;

// cha.addImage(chaimage);
// cha.scale = 0.1;


score=0;

}


function draw() {

boy.debug = true;
boy.setCollider("circle",0,0,255);
// backgroundx("cenario");
background("white");

textSize(15);
text("Score:"+ score, 470,50);



 
  

 
 if(gameState === PLAY){

   spawnObstaculos();
   spawnBebidas();
  
  if(keyDown("space") && boy.y>= 110) {
      boy.velocityY = -13;
      
  }
  boy.velocityY = boy.velocityY + 0.6;
  
  
  if(obstacle.isTouching(boy)) {
    obstacle.velocityX = obstacle.velocityX + 5;
  }
    
 

  boy.collide(invisibleGround);


  

  if(bebida.isTouching(boy)) {
          gameState = END
        
  }
}

 



  else if(gameState === END) {  
  b();   
  }


  

  

  
  


          

 
  
 
  if (cenario.x < 225){
    cenario.x = 300;
  }


  
    drawSprites()

  
    

}







function spawnObstaculos() {
  if(frameCount % 90 === 0) {
    var obstacle = createSprite(600,165,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -3; }
    
    //gere obstáculos aleatórios
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(bananaimage);
              break;
      case 2: obstacle.addImage(chaimage);
              break;
      case 3: obstacle.addImage(bananaimage);
              break;
      case 4: obstacle.addImage(chaimage);
              break;
      case 5: obstacle.addImage(bananaimage);
              break;
      case 6: obstacle.addImage(chaimage);
              break;
      default: break;
    }
              
    obstacle.scale = 0.1;
    obstacle.lifetime = 200;

    obstacle.y = Math.round(random(155,125));

    obstaculogrupo.add(obstacle);
  }



function spawnBebidas() {
  if(frameCount % 90 === 0) {
  bebida = createSprite(750,100,2,2);
}

  var rand = Math.round(random(1,6));
  switch(rand) {
    case 1: bebida.addImage(bebidaimage);
            break;
    case 2: bebida.addImage(bebidaimage);
            break;
    case 3: bebida.addImage(bebidaimage);
            break;
    case 4: bebida.addImage(bebidamage);
            break;
    case 5: bebida.addImage(bebidaimage);
            break;
    case 6: bebida.addImage(bebidaimage);
            break;
    default: break;
  }

  bebidasgrupo.add(bebida);
  bebida.scale = 0.2;
  bebida.velocityX = -0.9;
}

function b() {
  boy.rotation = boy.rotation + 10; 
}

