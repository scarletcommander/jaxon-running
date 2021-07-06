  var jaxon,jaxon_running;
  var path,invisible_wall;
  var invisible_wall2;
  var pathimg;
  var coin,coinimg;;
  var edges
   
  function preload(){
    //pre-load images

    jaxon_running = loadAnimation("Runner-1.png","Runner-2.png")
    pathimg = loadImage("path.png")
    coinimg = loadImage("coin.png")
    

  }

  function setup(){

    createCanvas(400,400);

    //create sprites here
    

    path = createSprite(200,200);
    path.addImage(pathimg);
    path.scale = 1.2

    jaxon = createSprite(200,200);
    jaxon.addAnimation("running" , jaxon_running);
    jaxon.scale = 0.086
    
    coin = createSprite(350,200,10,400)
    coin.addImage(coinimg)
    coin.scale = 0.2


    invisible_wall = createSprite(370,200,10,400)
    invisible_wall2 = createSprite(30,200,10,400)
    
    invisible_wall.visible = false
    invisible_wall2.visible = false
    
    
     
  }

  function draw() {
    background(0);
    
   
    jaxon.x =  World.mouseX
    path.velocityY = 4

    if(path.y > 400) {
    path.y = height/2

    

    
    }
    edges = createEdgeSprites()

    jaxon.collide(invisible_wall2);
    jaxon.collide(invisible_wall);
    jaxon.collide(edges[3]);
    

    
    drawSprites();
    
  }
