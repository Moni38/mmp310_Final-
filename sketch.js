let bgImg;
var x1;
var x2;
var scrollSpeed = 1.3;
var clouds = [];
var song;
var soundFormats;

function preload() {
    soundFormats('mp3', 'ogg');
    song = loadSound("sounds/christmas.mp3");

    bgImg = loadImage("images/background-image.jpg");
    //mySong = loadSound("sounds/christmas.mp3"); // loads music

}

function setup() {
    createCanvas(1000, 558);

    x1 = 0;
    x2 = width;

    song.setVolume(0.1);
    song.play();

}

function draw() {

    //This will make the background scroll endlessly
    image(bgImg, x1, 0, width, height);
    image(bgImg, x2, 0, width, height);

    x1 -= scrollSpeed;
    x2 -= scrollSpeed;

    if (x1 < -width) {
        x1 = width;
    }
    if (x2 < -width) {
        x2 = width;
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
