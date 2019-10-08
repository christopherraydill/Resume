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
theTimer3 = setInterval(function() {changeMe3()}, 5000);

// **** random pic ****//
function changeMe3() {
	myImageName = ["blank", "images/kurosaki-ichigo.jpg", "images/black-smith.jpg", "images/pro-gram.jpg"];
	IName = ["blank", "ANIME", "BLACKSMITHING", "PROGRAMMING"];
	var ranName = Math.floor((Math.random() * 3) + 1);
	document.getElementById("disPic").src = myImageName[ranName];
	document.getElementById("dispName").innerHTML = IName[ranName];
}

//button controllers
function myBackColor() {
    document.getElementById("myHeader").style.backgroundColor = "red";
}

function myHide() {
    document.getElementById("myHeader").style.display = "none";
}

function myShow() {
    document.getElementById("myHeader").style.display = "block";
}

function myMove() {
    document.getElementById("myHeader").style.position = "relative";
	document.getElementById("myHeader").style.left = "100px";
}