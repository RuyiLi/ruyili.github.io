canvas = document.getElementById("gameCanvas");
ctx = canvas.getContext("2d");

var player = new Image();
var keysDown = {};
var colory;
var color;
var pcolor;
var speed;

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

function setup(){
	canvas.width = 480;
	canvas.height = 685;
   colory = 0;	
   speed = 5;
   pcolor = "#00FF00";
	
	renderFrame();
	attack();
	changeColor();
}


function renderFrame() {
	requestAnimationFrame(renderFrame);
	
	if (37 && 39 in keysDown){
		player.src = "https://ruyili.github.io/rgb/purple.png";
		pcolor = "#800080"
	}
	
	if(37 in keysDown && !(39 in keysDown)){
		player.src = "https://ruyili.github.io/rgb/red.png";
		pcolor = "#FF0000"
	}else if (39 in keysDown && !(37 in keysDown)){
		player.src = "https://ruyili.github.io/rgb/blue.png";	
		pcolor = "#0000FF"
	}else if (!(37 in keysDown) && !(39 in keysDown)){
		player.src = "https://ruyili.github.io/rgb/green.png";	
		pcolor = "#00FF00"
	}
	document.body.style.backgroundColor = pcolor;
}

(function ecksdee(){
	requestAnimationFrame(ecksdee);
   colory = colory + speed;
})();

function attack(){
	requestAnimationFrame(attack);
	ctx.fillStyle = color;
	ctx.clearRect(0, 0, 480, 685)
	ctx.fillRect(0, colory, 480, 30);
   ctx.drawImage(player, 208, 550);
	
	if(speed < 75){
		speed += 0.001;
	}	
	
	if(colory > 685){
		colory = 0;
		changeColor();
	}
	
	if(colory > 520 && colory < 614){
		if(color != pcolor){
			setup();																																																																																																															
		}
	}
};

function changeColor(){
	//purple #800080
	//red #FF0000
	//green #00ff00
	//blue #0000FF
	var rand = randInt(1, 8);
	if (rand == 1){
		color = "#800080";
	}else if (rand == 2){
		color = "#FF0000";
	}else if (rand == 3){
		color = "#00FF00";
	}else if (rand == 4){
		color = "#0000FF";
	}else if (rand == 5){
		color = "#800080";
	}else if (rand == 6){
		color = "#FF0000";
	}else if (rand == 7){
		color = "#00FF00";
	}else if (rand == 8){
		color = "#0000FF";
	}
};

function randInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

setup();
