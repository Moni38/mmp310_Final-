let bgImg;
var x1;
var x2;
var scrollSpeed = 1.3;
var car1;
var car2;
var car3;
var song;
var soundFormats;

function preload() {
        soundFormats('mp3', 'ogg');
        song = loadSound("sounds/christmas.mp3");

    bgImg = loadImage("images/background-image.jpg");

}

function setup() {
    createCanvas(1000, 558);

    x1 = 0;
    x2 = width;

        song.setVolume(0.1);
        song.play();

    // create the car
    car1 = new Car(475, .5);
    car2 = new Car(490, 1.2);
    car3 = new Car(500, -1.3);

}

function draw() {
    noStroke();

    //This will make the background scroll endlessly
    image(bgImg, x1, 0, width, height);
    image(bgImg, x2, 0, width, height);
    text("Merry Christmas", 100, 100);

    x1 -= scrollSpeed;
    x2 -= scrollSpeed;

    if (x1 < -width) {
        x1 = width;
    }
    if (x2 < -width) {
        x2 = width;
    }

    drawStars();

    drawCloud(140);
    drawCloud(475);
    drawCloud(850);

    // car1
    car1.drive();
    // display myCar
    car1.display();
    //color
    car1.c = color(255, 51, 51);

    // car2
    car2.drive();
    // display yourCar
    car2.display();
    //color
    car2.c = color(255, 215, 0);

    // car3
    car3.drive();
    // display yourCar
    car3.display();
    //color
    car3.c = color(56, 62, 252);

}

function drawStars() {
    fill(random(255), random(255), random(60), random(75)); //random twinkle stars
    var starX = 60;
    var starY = 5;
    //draws lil star ellipses:
    ellipse(starX, 60, starY, 5);
    ellipse(starX + 310, starY * 6, 8, 8);
    ellipse(starX + 325, starY * 7, 4, 4);
    ellipse(starX + 410, starY * 9, 6, 6);
    ellipse(starX + 100, starY * 2, 5, 5);
    ellipse(starX + 525, starY * 4, 4, 4);
    ellipse(starX + 610, starY * 9, 6, 6);
    ellipse(starX + 700, starY * 2, 5, 5);
    ellipse(starX + 825, starY * 4, 4, 4);
    ellipse(starX + 900, starY * 2, 5, 5);
    ellipse(starX + 925, starY * 4, 4, 4);
}

function drawCloud(xpos) {
    var cloudColor = 150;
    var cloudTransparency = 80;
    var cloudShape = {
        x: xpos,
        y: 110,
        w: 40,
        h: 20
    };

    fill(cloudColor, cloudTransparency);
    //ellipses to make up the cloud
    ellipse(cloudShape.x - 15, cloudShape.y, cloudShape.w + 10, cloudShape.h);
    ellipse(cloudShape.x, cloudShape.y - 10, cloudShape.w - 10, cloudShape.h);
    ellipse(cloudShape.x + 25, cloudShape.y - 3, cloudShape.w, cloudShape.h);
    ellipse(cloudShape.x + 35, cloudShape.y + 5, cloudShape.w - 10, cloudShape.h);
    ellipse(cloudShape.x + 45, cloudShape.y, cloudShape.w, cloudShape.h);
    ellipse(cloudShape.x, cloudShape.y, cloudShape.w, cloudShape.h);
}

// car
function Car(h, s) {
    this.xpos = 0;
    this.ypos = h;
    this.speed = s;
    this.c = color(153, 102, 51);

    this.drive = function () {
        this.xpos += this.speed;
        if (this.xpos > width) {
            this.xpos = 0;
        } else if (this.xpos < -width) {
            this.xpos = width;
        }
        this.xpos = this.xpos + this.speed;
    }

    // display method
    this.display = function () {
        // body of the car
        fill(this.c);
        rectMode(CORNER);
        rect(this.xpos, this.ypos + 10, 100, 30, 10);
        rect(this.xpos + 17, this.ypos - 20, 65, 55, 15);
        //windows
        fill('white');
        rect(this.xpos + 30, this.ypos - 16, 15, 20, 5);
        rect(this.xpos + 55, this.ypos - 16, 15, 20, 5);

        // wheels
        fill(0);
        ellipse(this.xpos + 20, this.ypos + 45, 30, 30);
        ellipse(this.xpos + 80, this.ypos + 45, 30, 30);
    }

}

function mousePressed() {
    if (song.isPlaying()) {
        // .isPlaying() returns a boolean
        song.stop();
    } else {
        song.play();
    }
}

function ending() {}
