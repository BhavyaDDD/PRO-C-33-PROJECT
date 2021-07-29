//Created variables
//*IMp -Created variable snows an made an array inside
var bg, snows = []
var girlImg, girl
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
function preload() {
    getBackgroundImg()
    girlImg = loadImage("girl.png")
}
function setup() {
    createCanvas(windowWidth, windowHeight - 5);
    girl = createSprite(400, height - 200, 50, 50);
    girl.addImage("girl", girlImg)
    girl.scale = 0.5

    engine = Engine.create();
    world = engine.world;
    // for(i=0;i<20;i++){
    //  snow=new Snow (width/2,0,100,100)
    //  }
    // snow=new Snow (width/2,0,100,100)

}

function draw() {
    if (bg) {
        background(bg)
    } else {
        background("red")
    }
    Engine.update(engine);
    if (keyDown("LEFT_ARROW")) {
        girl.x = girl.x - 5
    }

    if (keyDown("RIGHT_ARROW")) {
        girl.x = girl.x + 5
    }
    drawSprites();

    //Condition on frameCount divisible by 5
    if (frameCount % 5 == 0) {

        //Pushed the value of new snow object into snows
        snows.push(new Snow(random(0, width), 0, 100, 100))
        // snow.display()
    }

    /*Foor loop- i a variable which is lesser than snows.length and it will be
     increased till there*/
    for (var i = 0; i < snows.length; i++) {

        //In snows the value i will be dsiplayed to help the dusplaying of snow object
        snows[i].display()
    }
    //for(i=0;i<20;i++){

    //}

}
async function getBackgroundImg() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJson = await response.json()
    var datetime = responseJson.datetime
    var hour = datetime.slice(11, 13)

    if (hour >= 04 && hour <= 06) {
        bg = loadImage("snow1.jpg")
    } else if (hour >= 06 && hour <= 08) {
        bg = loadImage("snow1.jpg")
    } else if (hour >= 08 && hour <= 11) {
        bg = loadImage("snow1.jpg")
    } else if (hour >= 11 && hour <= 13) {
        bg = loadImage("snow1.jpg")
    } else if (hour >= 13 && hour <= 15) {
        bg = loadImage("snow1.jpg")
    } else if (hour >= 15 && hour <= 17) {
        bg = loadImage("snow3.jpg")
    } else if (hour >= 17 && hour <= 18) {
        bg = loadImage("snow3.jpg")
    }
    else if (hour >= 18 && hour <= 20) {
        bg = loadImage("snow2.jpg")
    } else if (hour >= 20 && hour <= 23) {
        bg = loadImage("snow2.jpg")
    } else if (hour >= 23) {
        bg = loadImage("snow2.jpg")
    } else if (hour >= 00) {
        bg = loadImage("snow2.jpg")
    } else {
        bg = loadImage("snow2.jpg")
    }
    //console.log(hour)
}

