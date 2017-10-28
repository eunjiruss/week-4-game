//set up 4 crystal images
//if total score=computerNum, increment Wins
//if totalscore==computerNum, increment Losses
//Reset when player win/lose
//Another random num is picked and all crystals have new numbers too
//score board should continue to keep track
var randomNum = 0;
var crystalNum = 0;
var crystalTotal = 0;
var loss = 0;
var win = 0;
 

//show a random number at the "start"; window on load randomNum="19-120"
randomNum = Math.floor(Math.random() * (101 + 1)) + 19;
$("#randomNum").html("Crystal To Harvest: " + randomNum);

//console.log(randomNum);


//each of the 4 crystal will have a random number each round "1-12"
//set a loop for 4 cryNum generator
for (var i = 0; i < 4; i++) {
	//console.log("Hello world");
	var crystalNum = Math.floor(Math.random() * 12 - 1 + 1)+1;
	//console.log(crystalNum);
	var crystal = $("<div>");
		crystal.attr({
			"class": 'crystal',
			"ComputerGuess": crystalNum
		});

		crystal.html(crystalNum); //To show the number for test (checked)

	$(".crystals").append(crystal);
	//console.log("Crystal Test");

}



//on click, each crystal should have a random value between 0-12 (checked)
//These values should not show up "on.click"
$(".crystal").on('click', function () {
	//console.log($(this).attr('ComputerGuess')); (checked)
	//make each crystal a separate variable and then add the functions to add the values in//
	var crystalValue = parseInt($(this).attr('ComputerGuess'));
	crystalTotal += crystalValue;
	console.log(crystalTotal); 
//But the incrementation of the values should show up upon each crystal "on.click" (checked)
	
	//if total crystal added is over the randomNum, then add point to "losses"
	if(crystalTotal > randomNum) {
		loss++;
		alert("Try Again!");
		$("#losses").html("Losses: " + loss);


	}


	//If the total crystal added is equal to the randomNum, then add point to "wins" and alert "You Got It"
	else if(crystalTotal === randomNum) {
		win++;
		alert("You Got It!");
		$("#wins").html("Wins: " + win);
	//console.log("You Got It!"); (checked)
		alert("You Got It!");

	}




});




