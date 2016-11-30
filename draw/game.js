String.prototype.replaceAll = function(search, replacement) {
	var target = this;
	return target.replace(new RegExp(search, 'g'), replacement);
};

String.prototype.replaceAt = function(index, character) {
	return this.substr(0, index) + character + this.substr(index + character.length);
}

var x = 0, y = 0;

var w = 50, h = 50;

var drawing = true;
var hide = false;

var maze = [];

for(var i = 0; i < h + 1; i++){
	maze[i] = "";
	for(var j = 0; j < w + 1; j++){
		maze[i] += "▓"
	}
}

var draw = function(){
	var gameText = $("#game").text(maze.toString()).text()
	$('#game').html(gameText.replaceAll(",", '<br/>'));
	$("#pos").text("x: " + x + ", y: " + y)
}

var clear = function(){
	maze = []
	for(var i = 0; i < h + 1; i++){
		maze[i] = "";
		for(var j = 0; j < w + 1; j++){
			maze[i] += "▓"
		}
	}
	x = 0, y = 0;
	maze[y] = maze[y].replaceAt(x, "O")
	draw();
	return "Cleared"
}

$("#clear").on("click", function(){
	clear()
	blur();
});

$("#resize").on("click", function(){
	h = parseInt($("#h").val()) - 1
	w = parseInt($("#w").val()) - 1
	if(h < 0){
		h = 0
	}
	
	if(w < 0){
		w = 0
	}
	clear();
	blur();
})

$("#hide").on("click", function(){
	if(!hide){
		if(drawing){
			maze[y] = maze[y].replaceAt(x, "█")
		}else{
			maze[y] = maze[y].replaceAt(x, "▓")
		}
		draw();
		$("#hide").text("Show Brush")
		hide = true;
	}else{
		maze[y] = maze[y].replaceAt(x, "O")
		$("#hide").text("Hide Brush")
		draw();
		hide = false;
	}
	blur();
});

$("#copy").on("click", function(){
    var text = document.getElementById("game");
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(text);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
	blur();
});

document.onkeydown = function(e){
	if(e.keyCode == 32){
		drawing = !drawing;
		if(drawing){
			$("#mode").text("Current mode: █");
		}else{
			$("#mode").text("Current mode: ▓");
		}
		
	}else if(e.keyCode == 16){
		clear();
		
	}else if(e.keyCode == 68 && x < w){
		x += 1;
		if(drawing){
			maze[y] = maze[y].replaceAt(x - 1, "█")
		}else{
			maze[y] = maze[y].replaceAt(x - 1, "▓")
		}
		hide = false;
		$("#hide").text("Hide Brush")
		
	}else if(e.keyCode == 65 && x > 0){
		x -= 1;
		if(drawing){
			maze[y] = maze[y].replaceAt(x + 1, "█")
		}else{
			maze[y] = maze[y].replaceAt(x + 1, "▓")
		}
		hide = false;
		$("#hide").text("Hide Brush")
		
	}else if(e.keyCode == 87 && y > 0){
		y -= 1;
		if(drawing){
			maze[y + 1] = maze[y + 1].replaceAt(x, "█")
		}else{
			maze[y + 1] = maze[y + 1].replaceAt(x, "▓")
		}
		hide = false;
		$("#hide").text("Hide Brush")
		
	}else if(e.keyCode == 83 && y < h){
		y += 1;
		if(drawing){
			maze[y - 1] = maze[y - 1].replaceAt(x, "█")
		}else{
			maze[y - 1] = maze[y - 1].replaceAt(x, "▓")
		}
		hide = false;
		$("#hide").text("Hide Brush")
	}
	
	maze[y] = maze[y].replaceAt(x, "O")
	draw();
}

maze[y] = maze[y].replaceAt(x, "O")

draw();