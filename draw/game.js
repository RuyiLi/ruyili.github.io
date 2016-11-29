String.prototype.replaceAll = function(search, replacement) {
	var target = this;
	return target.replace(new RegExp(search, 'g'), replacement);
};

String.prototype.replaceAt = function(index, character) {
	return this.substr(0, index) + character + this.substr(index+character.length);
}

var x = 0, y = 0;

var drawing = true;

var maze = [];

for(var i = 0; i < 50; i++){
	maze[i] = "";
	for(var j = 0; j < 50; j++){
		maze[i] += "?"
	}
}

var draw = function(){
	var gameText = $("#game").text(maze.toString()).text()
	$('#game').html(gameText.replaceAll(",", '<br/>'));
}

var clear = function(){
	for(var i = 0; i < 50; i++){
		maze[i] = "";
		for(var j = 0; j < 50; j++){
			maze[i] += "?"
		}
	}
	maze[y] = maze[y].replaceAt(x, "O")
	draw();
}

$("#clear").click(function(){
	clear();
});

document.onkeydown = function(e){
	if(e.keyCode == 32){
		drawing = !drawing;
		if(drawing){
			$("#mode").text("Current mode: #");
		}else{
			$("#mode").text("Current mode: ?");
		}
	}
	if(e.keyCode == 16){
		clear();
	}
	if(e.keyCode == 68 && x < 49){
		x += 1;
		if(drawing){
			maze[y] = maze[y].replaceAt(x - 1, "#")
		}else{
			maze[y] = maze[y].replaceAt(x - 1, "?")
		}
	}else if(e.keyCode == 65 && x > 0){
		x -= 1;
		if(drawing){
			maze[y] = maze[y].replaceAt(x + 1, "#")
		}else{
			maze[y] = maze[y].replaceAt(x + 1, "?")
		}
	}else if(e.keyCode == 87 && y > 0){
		y -= 1;
		if(drawing){
			maze[y + 1] = maze[y + 1].replaceAt(x, "#")
		}else{
			maze[y + 1] = maze[y + 1].replaceAt(x, "?")
		}
	}else if(e.keyCode == 83 && y < 49){
		y += 1;
		if(drawing){
			maze[y - 1] = maze[y - 1].replaceAt(x, "#")
		}else{
			maze[y - 1] = maze[y - 1].replaceAt(x, "?")
		}
	}
	maze[y] = maze[y].replaceAt(x, "O")
	draw();
}

maze[y] = maze[y].replaceAt(x, "O")

draw();