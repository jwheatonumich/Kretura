//Based on tutorial from http://www.lostdecadegames.com/how-to-make-a-simple-html5-canvas-game/

//Create canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 245;
canvas.height = 350;
canv = document.getElementById("game-canvas").appendChild(canvas);

//Initialize variables
fallSpeed = 2; //Base speed things fall
gameStatus = ""; //Has player won or lost game yet
var coinsCaught = 0; //How many coins player has caught
gameStart = false;
spiderDrops = 0 //How many spiders have dropped
var dailyEvents = JSON.parse(localStorage.getItem('dailyEvents')); //Load daily events data


// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "../images/acorn-drop-bg.png";

// Character image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = playerStats.image;

// Spider image
var spiderReady = false;
var spiderImage = new Image();
spiderImage.onload = function () {
	spiderReady = true;
};
spiderImage.src = "../images/acorn-drop-spider.png";

// Spider2 image
var spider2Ready = false;
var spider2Image = new Image();
spider2Image.onload = function () {
	spider2Ready = true;
};
spider2Image.src = "../images/acorn-drop-spider.png";

// Coin image
var coinReady = false;
var coinImage = new Image();
coinImage.onload = function () {
	coinReady = true;
};
coinImage.src = "../images/acorn-drop-coin.png";

// Game objects
var hero = {
	speed: 256, // movement in pixels per second
	x: canvas.width/2 - 40,
	y: canvas.height - 100
};
var spider = {
	x: 0,
	y: 0
};
var spider2 = {
	x: 0,
	y: 0
};
var coin = {
	x: 0,
	y: 0
};

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

//Detect if touch device
function isTouchDevice() {
	return (('ontouchstart' in window) ||
	   (navigator.maxTouchPoints > 0) ||
	   (navigator.msMaxTouchPoints > 0));
  };

if(!isTouchDevice()){
	document.getElementById("touch-controls").parentElement.removeChild(document.getElementById("touch-controls"));
}else{
	//Handle touch controls
	document.getElementById("move-left").addEventListener("touchstart", touchDownLeft);
	document.getElementById("move-left").addEventListener("touchend", touchUpLeft);
	document.getElementById("move-right").addEventListener("touchstart", touchDownRight);
	document.getElementById("move-right").addEventListener("touchend", touchUpRight);
}

//Functions to move left and right
function touchDownLeft(e) {

		keysDown[[37]] = true;

};

function touchUpLeft(e) {

	delete keysDown[[37]];

};

function touchDownRight(e) {

	keysDown[[39]] = true;

};

function touchUpRight(e) {

	delete keysDown[[39]];
};

// Reset the coin when the player catches it
var resetCoin = function () {

	// Throw the coin somewhere on the screen randomly
	coin.x = (Math.random() * (canvas.width - coinImage.width));
    coin.y = 0;
    
    coinFallSpeed = fallSpeed + 2*Math.random()
};

var resetSpider = function () {

	// Throw the coin somewhere on the screen randomly
	spider.x = (Math.random() * (canvas.width - spiderImage.width));
    spider.y = 0;
    
    spiderFallSpeed = fallSpeed + 2*Math.random()
};

var resetSpider2 = function () {

	// Throw the coin somewhere on the screen randomly
	spider2.x = (Math.random() * (canvas.width - spider2Image.width));
    spider2.y = 0;
    
    spider2FallSpeed = fallSpeed + 2*Math.random()
};

// Update game objects
var update = function (modifier) {

	if ((37 in keysDown) && hero.x > 0) { // Player holding left
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown && hero.x < canvas.width - 100) { // Player holding right
		hero.x += hero.speed * modifier;
	}

	//Move coin down
    coin.y += coinFallSpeed;

	//Move spider down
	spider.y += spiderFallSpeed;
	
	//Move second spider down if enough drops have happened
	if(spiderDrops > 5){
		spider2.y += spider2FallSpeed;
	}

	// Did player catch coin?
	if (
		hero.x <= (coin.x + coinImage.width)
		&& coin.x <= (hero.x + heroImage.width)
		&& hero.y <= (coin.y + coinImage.height)
        && coin.y <= (hero.y + heroImage.height)
	) {
		++coinsCaught;

		if (coinsCaught >= 10){
			gameStatus = "win"
		}

		resetCoin();
    };

    //Did coin touch ground?
    if (
        coin.y + 30 > canvas.height
	) {
		resetCoin();
    };
    
    //Did player touch spider?
    if (
		hero.x <= (spider.x + spiderImage.width -8)
		&& spider.x <= (hero.x + heroImage.width -8)
		&& hero.y <= (spider.y + spiderImage.height-8)
        && spider.y <= (hero.y + heroImage.height-8)
	) {
        gameStatus = "lose";
    };
    
    //Did the spider touch the ground?
    if (
        spider.y + 100 > canvas.height
    ) {
		spiderDrops += 1
		fallSpeed += .5 //Everything moves faster
        resetSpider();
	};
	
	//Did player touch spider2?
	if (
		hero.x <= (spider2.x + spider2Image.width -8)
		&& spider2.x <= (hero.x + heroImage.width -8)
		&& hero.y <= (spider2.y + spider2Image.height-8)
		&& spider2.y <= (hero.y + heroImage.height-8)
	) {
		gameStatus = "lose";
	};
	
	//Did the spider touch the ground?
	if (
		spider2.y + 100 > canvas.height
	) {
		resetSpider2();
	};
};

// Draw everything
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (coinReady) {
		ctx.drawImage(coinImage, coin.x, coin.y);
    }
    
    if (spiderReady) {
		ctx.drawImage(spiderImage, spider.x, spider.y);
	}

	if (spider2Ready && spiderDrops > 5) {
		ctx.drawImage(spider2Image, spider2.x, spider2.y);
	}

	// Score
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Coins caught: " + coinsCaught, 32, 32);
};

var renderStartScreen = function (){

	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	// Score
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	if(playerStats.health <= 0){
		ctx.fillText("Heal before playing", 20, 32);
	}
	else if(dailyEvents.acornCatch == true){
		ctx.fillText("Click to start", 60, 32);
	}else{
		ctx.fillText("Try again tomorrow", 20, 32)
	}
}

// The main game loop
var main = function () {

	if(!gameStart){

		startScreen();

	}else{

		var now = Date.now();
		var delta = now - then;

		update(delta / 1000);
		render();

		then = now;

		if (gameStatus == "lose"){
			endGame();
			return
		}
		
		if (gameStatus == "win"){
			endGame();
			return
		}

		// Request to do this again ASAP
		requestAnimationFrame(main);
	}
};

var startScreen = function () {

	renderStartScreen();

	if (37 in keysDown || 39 in keysDown){
		
		if(dailyEvents.acornCatch == true && playerStats.health > 0){

			dailyEvents.acornCatch = false;//Prevent player from taking again
			localStorage.setItem('dailyEvents',JSON.stringify(dailyEvents));//Save in local storage

			delete keysDown[[37]];
			delete keysDown[[39]];
			
			gameStart = true
		}

	}

	requestAnimationFrame(main);

}

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!

then = Date.now();
//startScreen();

resetCoin();
resetSpider();
resetSpider2();
main();



