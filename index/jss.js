/* var myVar = setInterval(function(){ rTime() }, 1000);
document.getElementById("disPic").src = "images/no-image.jpg";
	document.getElementById('dispName').innerHTML = "DISPLAY"
 */
/* function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("op").innerHTML = t;
}

function rTime() {
	var oneSecond = 1;
	var otherOne = 1;
    var theSeconds = ;
    document.getElementById("theRandom").innerHTML = theSeconds;
} */

var totalTimeInSeconds = 0;
var totalTimeInMinutes = 0;
var totalTimeInHours = 0;
var totalTimeInDays = 0;

//**** start the timer **** //
theTimer = setInterval(function() {theTime()}, 1000);

//advanced timer count
function theTime() {
	if (totalTimeInSeconds == 60){
		totalTimeInMinutes = totalTimeInMinutes + 1;
		totalTimeInSeconds = 0;
	}
	else if(totalTimeInMinutes == 60) {
		totalTimeInHours = totalTimeInHours + 1;
		totalTimeInMinutes = 0;
	}
	else if(totalTimeInHours == 24) {
		totalTimeInDays = totalTimeInDays + 1;
		totalTimeInHours = 0;
		alert("This is day " + totalTimeInDays);
	}
	else {
		
	} 
	totalTimeInSeconds = totalTimeInSeconds + 1;
	document.getElementById("timer").innerHTML = totalTimeInHours + ":" + totalTimeInMinutes + ":" + totalTimeInSeconds;
}

function stopTimer() {
	clearInterval(theTimer);
	totalTimeInSeconds = 0;
	totalTimeInMinutes = 0;
	totalTimeInHours = 0;
	totalTimeInDays = 0;
	document.getElementById("timer").innerHTML = totalTimeInHours + ":" + totalTimeInMinutes + ":" + totalTimeInSeconds;
	theTimer = setInterval(function() {theTime()}, 1000);
	
}

// **** start the timer **** //
theTimer2 = setInterval(function() {changeMe2()}, 5000);

// **** random pic ****//
function changeMe2() {
	var ranName = Math.floor((Math.random() * 3) + 1);
	if (ranName == 1){
		document.getElementById("disPic").src = "images/kurosaki-ichigo.jpg";
		document.getElementById('dispName').innerHTML = "ANIME";
	}
	else if(ranName == 2) {
		document.getElementById("disPic").src = "images/black-smith.jpg";
		document.getElementById('dispName').innerHTML = "BLACKSMITHING";
	}
	else {
		document.getElementById("disPic").src = "images/pro-gram.jpg";
		document.getElementById('dispName').innerHTML = "PROGRAMMING";
	}
}

