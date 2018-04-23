// CRYSTAL GAZER


function crystalGazer() {
var job_title = document.getElementById('field1').value;
var location = document.getElementById('field2').value;
var partners_name = document.getElementById('field3').value;
var number_childrens = parseInt(document.getElementById('field4').value);

 var result = "You will be a " + job_title + " in " + location + " and married to " + partners_name + " with " + number_childrens;

 document.getElementById("result").innerHTML = result;
}


// AGE CALCULATOR

function ageCalculator() {
var birth_year = parseInt(document.getElementById('birth_year').value);
var current_year = parseInt(document.getElementById('current_year').value);

var difference = current_year - birth_year;

var difference_alt = difference--;

 var result = "You are either " + difference + " or " + difference_alt;

 document.getElementById("age_result").innerHTML = result;
}

// AGE CALCULATOR IMPROVED

function ageCalculatorImproved() {

var birth_year2 = parseInt(document.getElementById('birth_year2').value);

var d = new Date();
var n = d.getFullYear();

var difference = n - birth_year2;

var difference_alt = difference--;

var result = "You are either " + difference + " or " + difference_alt;


 document.getElementById("age_result2").innerHTML = result;

}


// DEGREE-RADIAN CONVERSION

function degree_radian() {

var degree = document.getElementById('degree').value;

var result = "Result in Radian: " + (degree * (Math.PI/180));

document.getElementById("radian_result").innerHTML = result;
}


// AREA AND VOLUME OF A BOX

function area_volume() {

	var width = document.getElementById('width').value;
	var height = document.getElementById('height').value;
	var depth = document.getElementById('depth').value;
	var area = width * height;
	var volume = width * height * depth;
	var result = [area, volume];



	return result;


}

document.getElementById("area_result").innerHTML = area_volume()[0];
document.getElementById("volume_result").innerHTML = area_volume()[1];




// TRY AND CATCH



try {

var person = prompt("Please enter your name", "Harry Potter");

   	document.getElementById("message").innerHTML =

   	"Hello " + person + "! How are you today?";
}

catch(err){
	console.log(err.message)
	alert("An error has occured ... The " + err + " must be fixed");
}

