var grid = setUpBoard(4);

function setUpBoard(size){
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

//*******COMMANDS********COMMANDS********COMMANDS*********COMMANDS*******COMMANDS*****//
//																					  //
//*******COMMANDS********COMMANDS********COMMANDS*********COMMANDS*******COMMANDS*****//

$(document).ready(
	function(){
		var myGrid = setUpBoard(4);
		printBoard(myGrid);
}
);


