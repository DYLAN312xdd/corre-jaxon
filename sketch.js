var path,boy, leftBoundary,rightBoundary;
var pathImg,boyanimation;
var i;

function preload(){
  //loadImage de path (camino)
  //loadAnimation de boy (niño)
  boyanimation = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png","jake5.png");
 pathImg = loadImage("path.png");
} 
function setup(){
  
  createCanvas(400,400);
 //crear sprite de path (camino) 
//agregar imagen de path
//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
path = createSprite(200, 200, 200, 250);
path.addImage(pathImg);
path.scale=1.0;

//crear sprite de boy (niño)
//agregar animación para boy
boy = createSprite(200, 200, 50, 50);
boy.addAnimation("animation",boyanimation);
boy.scale=0.6;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(66,200,10,400);
leftBoundary.visible = false;
////establecer visibilidad como false (falso) para límite izquierdo

//crear right Boundary (límite derecho)
rightBoundary=createSprite(340,200,10,400);
rightBoundary.visible = false;
//establecer visibilidad como false (falso) para límite izquierdo
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moviéndose en el eje X con el mouse
  edges = createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  boy.velocityX=0;

  if(keyDown("left")){ 
    boy.velocityX=-5;
  }
  
  if(keyDown("right")){ 
    boy.velocityX=5;
  }
  
  
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
