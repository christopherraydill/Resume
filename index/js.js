
function clickMe(imgName, theName) {
	savedBackIMG = document.getElementById("i-change").src;
	sIN = Text(theName)
	changeMe(savedBackIMG, sIN)
}

function changeMe(theIMG, tNI) {
	document.getElementById("disPic").src = theIMG;
	document.getElementById('dispName').innerHTML = tNI;
}

function changeMe2(theIMG, tNI, theInfo) {
	document.getElementById("disPic").src = theIMG;
	document.getElementById('dispName').innerHTML = tNI;
  document.getElementById('dispInfo').innerHTML = theInfo;
}
