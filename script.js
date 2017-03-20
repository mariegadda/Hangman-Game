	
// GLOBAL VARIABLES
// ===================================================
	
// arrays and variables for holding data
	var words = ["panther", "toucan", "monkey", "sloth", "frog" ]
	var selectedWord = " ";
	var lettersinWord = [];
	var numBlanks = 0;
	var blanksAndSuccesses = [];
	var wrongLetters = [];

// Game Counters
var wins = 0;
var losses = 0;
var guessesLeft=15;
// FUNCTIONS
// ===================================================
function startGame(){
	selectedWord = words[Math.floor(Math.random()*words.length)];
	lettersinWord=selectedWord.split("");
	numBlanks = lettersinWord.length;

	// reset
	guessesLeft = 15;
	wrongLetters = [];
	blanksAndSuccesses = [];
	// populate blanksAndSuccesses with blanks
	for(var i=0; i<numBlanks; i++){
		blanksAndSuccesses.push("_");
	}

	// change HTML to reflect game
	document.getElementById("game").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("counter").innerHTML = "You Have " +guessesLeft + " Guesses Left";
	document.getElementById('wins').innerHTML =  wins;
	document.getElementById('losses').innerHTML =  losses;
	// testing
	console.log(selectedWord);
	console.log(lettersinWord);
	console.log(numBlanks);
	console.log(blanksAndSuccesses);
}

function checkLetters(letter) {
	// check if letter exists in word
	var isLetterInWord = false
	for(var i=0; i<numBlanks; i++)
		if(selectedWord[i]==letter){
			isLetterInWord = true;

		}

	// Check where letter exists, then populate the blanks array
	if(isLetterInWord){ 
		for (var i=0; i<numBlanks; i++){
			if(selectedWord[i] == letter) {
				blanksAndSuccesses[i] = letter;
			}
		}
	}

else{
	wrongLetters.push(letter);
	guessesLeft--
}

console.log(blanksAndSuccesses);
}

// MAIN PROCESSES
// ===================================================
// initiates the code for the first time
startGame();

// register key clicks

document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	// testing
	console.log(letterGuessed);
}




// // array holding all my word options for the game
// 	var words = [ 
// 	["p", "a", "n", "t", "h", "e", "r"],
// 	["t", "o", "u", "c", "a", "n" ],
// 	["s", "l", "o", "t", "h"],
// 	["m", "o", "n", "k", "e", "y"],
// 	["f", "r", "o", "g"]
// 	];
// 	// variable for starting number of guesses
// 	var guesses = 15
// 	// choosing the word to be guessed
// 	var random = Math.floor((Math.random()*(words.length-1)));
// 	var computerChoice = words[random];
// 	// blanks is an array the length of the computerChoice
// 	var blanks = new Array(computerChoice.length);

// 	// foor loop goes through the blanks array and inserts a _ for each iterator
// 	for (var i = 0; i < blanks.length; i++){
// 	blanks[i] = "_ ";
// 	}

// 	// selects game div
// 	var target = document.getElementById("game");

// 	//prints the blanks that match the computerChoice
// 	target.innerHTML = "<p> " + (blanks.join(" ")) + "</p>"; 

// 	// prints "Guessed Letters: "
// 	var target =document.getElementById("letters");
// 	target.innerHTML = "<p> Guessed letters: </p>"

// 	// saving keystroke as the userGuess
// 	document.onkeyup = function() {
// 	var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); 
// 		// If else that checks if userGuess matches any of the indexes of computerChoice, if it does it changes that index of the blanks array (which is the array actually being displayed.)

// 			 if (userGuess === computerChoice[0]){ 
			 	
// 			 	blanks[0] = computerChoice[0];
// 			 	var target = document.getElementById("game");

// 				//prints the udpated blanks  array 
// 				target.innerHTML = "<p> " +(blanks.join(" ")) + "</p>"; 
// 			 }
			 
// 			 else if (userGuess === computerChoice[1]) {
// 			 	blanks[1] = computerChoice[1];
// 			 		var target = document.getElementById("game");

// 				//prints the udpated blanks  array 
// 				target.innerHTML = "<p> " +(blanks.join(" "))+ "</p>"; 
// 			 }

// 			  else if (userGuess === computerChoice[2]) {
// 			 	blanks[2] = computerChoice[2];
// 			 		var target = document.getElementById("game");

// 				//prints the udpated blanks  array 
// 				target.innerHTML = "<p> " +(blanks.join(" ")) + "</p>"; 
// 			 }

// 			  else if (userGuess === computerChoice[3]) {
// 			 	blanks[3] = computerChoice[3];
// 			 		var target = document.getElementById("game");

// 				//prints the udpated blanks  array 
// 				target.innerHTML = "<p> " +(blanks.join(" ")) + "</p>"; 
// 			 }
// 			  else if (userGuess === computerChoice[4]) {
// 			 	blanks[4] = computerChoice[4];
// 			 		var target = document.getElementById("game");

// 				//prints the udpated blanks  array 
// 				target.innerHTML = "<p> " +(blanks.join(" ")) + "</p>"; 
// 			 }
// 			  else if (userGuess === computerChoice[5]) {
// 			 	blanks[5] = computerChoice[5];
// 			 		var target = document.getElementById("game");

// 				//prints the udpated blanks  array 
// 				target.innerHTML = "<p> " +(blanks.join(" ")) + "</p>"; 
// 			 }
// 			 else if (userGuess === computerChoice[6]) {
// 			 	blanks[6] = computerChoice[6];
// 			 		var target = document.getElementById("game");

// 				//prints the udpated blanks  array 
// 				// target.innerHTML = "<p> " +blanks + "</p>"; 
// 			 }
// 			 //else statement for all userGuesses that do not fit in the word. therse are printed in new div.
// 			 else{
//                     guesses--;
//                     counter.innerHTML = '<p>You have ' + guesses + ' guesses remaining</p';
//                     console.log(userGuess);

//                     var letters = document.getElementById("letters");
// 			 		var target =document.getElementById("letters");
// 			 		var newDiv = document.createElement("div");
// 					newDiv.innerHTML = " " + userGuess
// 					target.appendChild(newDiv);
//                   // if the guesses reach 0 - alert that you lost and to refresh page
//                     if (guesses === 0) alert("You lose! Refresh Page to Try Again!");

// 			  }
// 			  // My best try at making a winning alert - this for all indexes of blanks and userguess. (doesn't work)
			 
// 			 // if (blanks[0] === userGuess[0] && 
// 				// blanks[1] === userGuess[1] &&
// 			 // 	blanks[2] === userGuess[2] &&
// 			 // 	blanks[3] === userGuess[3] && 
// 			 // 	blanks[4] === userGuess[4] && 
// 			 // 	blanks[5] === userGuess[5] && 
// 			 // 	blanks[6] === userGuess[6]) {
// 			 // 	alert("you win!");
// 				// }
				 
	
// 			  	// another guess at making a winning alert
// 			 	// if (blanks[0] && blanks[1] && blanks[2] && blanks[3] && blanks[4] && blanks[5] && blanks[6] != "_"){ 
//      //                alert("you win!"); }
// 		} 
