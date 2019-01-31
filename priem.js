//Priem checker combo
var choosenNumber ;
var numberDivisions = 0;
var count;

function priemCalculator () {
	var choosenNumber = document.getElementById('number').value;
	var divAttempts = choosenNumber +1;

	for (count=1; count<divAttempts ; count++ ) {
		var divV = choosenNumber / count ;
		if (divV === parseInt(divV, 10)) {
				numberDivisions = numberDivisions +1;
				console.log(choosenNumber + " is devidable by " + divV);
			if (divV > 1) {
			document.getElementById('divisions').innerHTML = "Dividable by: "+divV;
			}
		}
	}
	if (numberDivisions == 2) {
		document.getElementById('entered_number_results').innerHTML = choosenNumber + " is a prime number";
	}
	else {
		document.getElementById('entered_number_results').innerHTML = choosenNumber + " is NOT a prime number";
	}
	
	document.getElementById('divisionsAmount').innerHTML = "It has "+numberDivisions+ " dividers.";
		
	divV = 0;
	numberDivisions = 0;
}
priemCalculator ();

function toggleDarkLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}