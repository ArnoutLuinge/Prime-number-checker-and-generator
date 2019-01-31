//Priem generator combo
var numberDivisions = 0;
var currentPrimeNumber;
var choosenNumber = 1;
var divAttempts;
var foundNumbers = 0;
var i;
//var fromNumber = prompt("Please enter a number that you want to check from", "<number goes here>");
var tillNumber = prompt("Please enter a number that you want to check to", "<number goes here>");
//var tillNumberCalculated = tillNumber - fromNumber;
//console.log (tillNumberCalculated);

function priemGenerator () 
{	
	for (choosenNumber = 1; choosenNumber<tillNumber ; choosenNumber++ ) //loop to get a new number to check everytime aslong as its smaller than the given number to check to
	{		
		var divAttempts = choosenNumber + 1;

		for (i=1; i<divAttempts ; i++ ) 
		{
			var divV = choosenNumber / i ; 
			if (divV === parseInt(divV, 10)) 
			{
					numberDivisions = numberDivisions +1;
					
					 if (numberDivisions > 2) 
					{
						break;
					}
			}
		}
		if (numberDivisions == 2) 
		{
			foundNumbers = foundNumbers + 1;
			document.write("<br>"+choosenNumber+" is prime" );
		}
		numberDivisions=0;
	}
	document.getElementById("foundNumbers").innerHTML = ( foundNumbers + " prime numbers found.");
}	
priemGenerator ();

function toggleDarkLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}