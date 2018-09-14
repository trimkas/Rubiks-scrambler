//all the possible layer moves (WCA notation)
var possibleMoves = 
["F", "F'", "F2", "U", "U'", "U2", 
"R", "R'", "R2", "L", "L'", "L2", 
"D", "D'", "D2", "B", "B'", "B2",  ];

var scrambleText = document.getElementById('scramble');
var scrambleLength = 30; //default value

var preScramble; //holds the scramble
var randomMove;
var lastMove = ""; 


function newScramble(){

    preScramble = "";

    var customLength = document.getElementById('customlength').value;

    scrambleLength = customLength;

    for (i = 0; i < scrambleLength; i++){

        randomMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)] + " ";

        //Get the first character of the move, to avoid cancelling moves
        //e.g. one layer to the left, the same to the right on the next move
        var lastchar = lastMove.substring(0, 1);
        var randomchar = randomMove.substring(0,1);

        if(lastchar === randomchar){
            i--; //make the cycle go again
        }else{
            preScramble +=  randomMove; 
            lastMove = randomMove;
        }
        
    }

    //set scramble to span element
    scrambleText.innerHTML = preScramble;

}