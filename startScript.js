var grid = setUpBoard(4);

function setUpBoard(snize){
	var setGrid = [];
	for (var row = 0; row < size; row++){
		setGrid.push([]);
		for (var col = 0; col < size; col++){
			setGrid[row].push("X");
		}
	}

	return setGrid;
}

function printBoard(grid){
	var board = '<br/>' + "*----------------*" + '<br/>';
	
	for(var row=0; row<grid.length; row++){ //(2)
		board += "|     ";
		for(var col=0; col<grid[row].length; col++){//(3)
			board += grid[row][col] + "     |     ";
		}
		board += '<br/>';
		board += "*----------------*";
		board += '<br/>';
	}

	document.getElementById("container").innerHTML = board;
}

document.onkeypress = function(){onSnick};

function onSnick(e){
	e = e || window.event;

	if (e.keyCode === 37) {
		shiftLeft();
	}

	else if (e.keyCode === 39) {
		shiftRight();
	}

	else if (e.keyCode === 38) {
		shiftUp();
	}

	else if (e.keyCode === 40) {
		shiftDown();
	}
}

function checkExtras(direction) {
	if (direction === 'left') {
		for (var row = 0; row < size; row++){
			for (var col = 0; col < size; col++){
				if ()
			}
	}
}
}

function shiftLeft() {
	checkExtras('left');
}

$(document).ready(
	function(){
		var myGrid = setUpBoard(4);
		printBoard(myGrid);
	}
	);


