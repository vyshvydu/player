  var ground,groundimg;
  var cat,cat2,catimg,cat2img,catimgol;
  var mouse,mouse2,mouseimg,mouse2img,mouseimgol;
function preload() {
    //load the images here
     groundimg=loadImage("images/garden.png");
     catimg=loadImage("images/cat1.png");
     cat2img=loadAnimation("images/cat2.png","images/cat3.png");
     mouseimg=loadImage("images/mouse1.png");
     mouse2img=loadAnimation("images/mouse2.png","images/mouse3.png");
     catimgol=loadImage("images/cat4.png");
     mouseimgol=loadImage("images/mouse4.png");

     
}

function setup(){
    createCanvas(700,500);
    //create tom and jerry sprites here
    ground=createSprite(250,200,20,20);
    ground.addImage(groundimg);
    mouse=createSprite(100,425,20,20);
    mouse.addImage(mouseimg);
    mouse.scale=0.1;
    cat=createSprite(500,425,20,20);
    cat.addImage(catimg);
    cat.scale=0.1;
    cat.addAnimation("cat4",cat2img);
    mouse.addAnimation(mouse2img);

    mouse.addAnimation(mouseimgol);
    cat.addAnimation("cat2,cat3",catimgol);
}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry  
   

      
    
  
    
      if ( cat.x - mouse.x < cat.width / 2 - mouse .width / 2) {
        cat.velocityX = 0;
       cat.addAnimation("tomImg4", catimgol);
        cat.changeAnimation("tomImg4");
        cat.x = 500;
    
        mouse.addAnimation("jerryImage4",mouseimgol);
        mouse.changeAnimation("jerryImage4");
    
      }
    
      drawSprites();
    }
    
    function keyPressed() {
    
      if (keyCode === LEFT_ARROW) {
    
        cat.velocityX = -5;
       cat.addAnimation("tom_running", cat2img);
        cat.changeAnimation("tom_running");
    
      mouse.addAnimation("jerry_run", mouse2img);
        mouse.changeAnimation("jerry_run");
      }
    
    }