var garden, gardenimg;
var cat, catimg, mouse, mouseimg;

function preload() {
    //load the images here
gardenimg = loadImage("garden.png");
catimg = loadAnimation("cat1.png", "cat2.png", "cat3.png", "cat4.png");
mouseimg = loadAnimation("mouse1.png", "mouse2.png", "mouse3.png", "mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
garden = createSprite(200,100,1000,800)
garden.addImage(gardenimg);

    cat = createSprite(200,400,20,20);
    cat.addAnimation("c", catimg1);
    mouse = createSprite(500,400,20,20);
mouse.addAnimation("m", mouseimg1);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
Text(mouseX+','+mouseY, 10,45);

if (cat.x - mouse.x < (cat.width-mouse.width)/2 )
{
    cat.addAnimation("cattt", catimg3);
    cat.changeAnimation("cattt");
    cat.velocityX = 0;
}

    
    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode===LEFT_ARROW)
{
    cat.velocityX   = -5;
    cat.addAnimation("catrunning", catimg2);
    cat.changeAnimation("catrunning");
}

}
