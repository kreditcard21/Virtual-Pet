//Create variables here
var dog, dogImg;
var happyDog, happyDogImg;
var database;
var foodS;
var foodStock;
function preload()
{
  //load images here
  //dogImg.loadImage("dogImg.png");
  //happyDogImg.loadImage("dogImg1");
}

function setup() {
  createCanvas(500, 500);
  dog.createSprite(250, 250, 10, 10);
  //dog.addImage(dogImg);
  database=firebasedatabase
  foodStock=database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    //dog.addImage(happyDogImg);
  }
  drawSprites();
  //add styles here
  //textSize=10;
  //console.log(foodstock);
  //text("Note: Press the up arrow key to feed the dog!");
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}