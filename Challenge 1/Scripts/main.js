
//start config
var startFuel = 750000;
var startSpeed = 30000;
var startingDistance  = 50000;


//fuel
document.getElementById("fuelValue").innerHTML = startFuel;
setInterval (function() {
	var randomDecrease = Math.floor((Math.random() * 100) + 1);
	startFuel = startFuel - randomDecrease;
	document.getElementById("fuelValue").innerHTML = startFuel;

}, 2000); //every 2s


//speed
var  constantSpeed = startSpeed;
document.getElementById("speedValue").innerHTML = constantSpeed;
setInterval (function() {
	var speedVarient = Math.floor((Math.random()* 40) - 20); //gives value  for speed to fluctuate  between -20 and 20 from the constant speed per interval
	if (constantSpeed < (startSpeed-100))  speedVarient = Math.floor((Math.random()* 40) + 1); //makes sure the speed does not fluctuate under 29900
	if (constantSpeed > (startSpeed+100))  speedVarient = Math.floor((Math.random()* -40) - 1); //makes sure the speed does not fluctuate over 30100
	constantSpeed = constantSpeed + speedVarient;
	document.getElementById("speedValue").innerHTML = constantSpeed;
}, 1500); //every 1.5s

//distance travelled
document.getElementById("distanceTravelled").innerHTML = startingDistance;
setInterval (function() {
	var distanceIncrease = constantSpeed/3600;

	startingDistance = startingDistance + distanceIncrease;
	document.getElementById("distanceTravelled").innerHTML = Math.round(startingDistance);
}, 1500);
