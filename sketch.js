var dog,sadDog,happyDog,Milk;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  milk=loadImage("Images/milk.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  milk=createSprite(600,200,150,150);

  milk.scale=1;
}

function draw() {
  background(46,139,87);
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time
function feedDog(){
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
      Food:foodObj.getFoodStock(),
      FeedTime:hour()
  })
}



//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foods
  })
}