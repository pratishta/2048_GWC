var grid = [];

function Tile (val, hasMoved) {
	this.val = val;
	this.hasMoved = hasMoved;

	this.merge = function(mergeTile){
		mergeTile.val = this.val + mergeTile.val
		this.val = "&nbsp;&nbsp;&nbsp;";
		this.hasMoved = true;
		mergeTile.hasMoved = true;
	};

	this.move = function(mergeTile){
		mergeTile.val = this.val;
		this.val = "&nbsp;&nbsp;&nbsp;";
		this.hasMoved = true;
	};
}

function setUpBoard(size){
	var setGrid = [];
	for (var row = 0; row < size; row++){
		setGrid.push([]);
		for (var col = 0; col < size; col++){
			var myTile = new Tile ("&nbsp;&nbsp;&nbsp;", false);
			setGrid[row].push(myTile);
		}
	}

	return setGrid;
}



function printBoard(){
	var board = '<br/>' + "*--------------------------*" + '<br/>';
	
	for(var row=0; row<grid.length; row++){ 
		board += "|";
		for(var col=0; col<grid[row].length; col++){
			board += (grid[row][col]).val + "&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;";
		}
		board += '<br/>';
		board += "*--------------------------*";
		board += '<br/>';
	}

	document.getElementById("container").innerHTML = board;
}

document.onkeydown = function(){onClick()};

function onClick(e){
	e = e || window.event;

	if (e.keyCode === 37) {
		shiftLeft();
		//grid[0][0].val = "friends";
		printBoard();
	}

	else if (e.keyCode === 39) {
		shiftRight();
		printBoard();
	}

	else if (e.keyCode === 38) {
		shiftUp();
		printBoard();
	}

	else if (e.keyCode === 40) {
		shiftDown();
		printBoard();
	}
}

/*function checkExtras(direction) {
	if (direction === "left") {
		
	}
}*/

function shiftLeft() {
	//grid[0][0].val = "friends";
	for (var row = 0; row < grid.length; row++){
		for (var col = 0; col < grid.length; col++){
			//grid[row][col].val = "friends";
			if ((col !== 0) && (grid[row][col].val !== "&nbsp;&nbsp;&nbsp;")){
				if (grid[row][col].val === grid[row][col-1].val){
					grid[row][col].merge(grid[row][col-1]);
				}
				else {
					grid[row][col].move(grid[row][col-1])
				}
			}
		}
	}
}

$(document).ready(
	function(){
		grid = setUpBoard(4);
		var row = Math.floor((Math.random() * 4));
		var col = Math.floor((Math.random() * 4));
		grid[row][col].val = 2;
		printBoard();
	}
);


