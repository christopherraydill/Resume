//red > yellow > green then green > yellow > red OnClick

//start or stop the race
var startAndStop = false;

//allows for one click only
var clickOnlyOneMax = false;

//allows for timed intervals to swap images
var alternate = false;

//random number
var myRacer1;
var myRacer2;

//leader bourd places and pixle places
var myPlace1 = 120;
var myPlace2 = 120;

//who has the current lead
var nameOfLeader = "";

//only one winner
var someoneWonAlready = false;

//lead time
var flashLeadTime = 0;
var quiksilverLeadTime = 0;

//names for nav costom buttons
var a1 = false;
var a2 = false;
var a3 = false;
var a4 = false;

//speed adjuster
var theSpeed = 2;

function lit(){
  if(clickOnlyOneMax == false){
    //wait then call yellow
    theTimerYellow = setInterval(function() {yellow()}, 1000);

    //clicked once
    clickOnlyOneMax = true;
  }
}

function yellow(){
  //change picture to yellow stop light
  document.getElementById("idPlease").src = "images/yellow-for-slow.png";

  //delete timer
  clearInterval(theTimerYellow);

  //if starting the race then call green else call red and delete blink
  if(startAndStop == false){
    //wait then call green
    theTimerGreen = setInterval(function() {green()}, 1000);
  }
  else{
    //wait then call red
    theTimerRed = setInterval(function() {red()}, 1000)

    //delete timer
    clearInterval(theTimerBlink);
  }


}

function green(){
  //change picture to green stop light
  document.getElementById("idPlease").src = "images/green-for-go.png";

  //delete timer
  clearInterval(theTimerGreen);

  //start the race
  startAndStop = true;

  //clicked once
  clickOnlyOneMax = false;

  //wait then call blink
  theTimerBlink = setInterval(function() {blink()}, 1000);

  //slow
  if (theSpeed == 1) {
    //wait then call startTheRace
    theTimerRace = setInterval(function() {startTheRace()}, 1000);
  }

  //medium
  if (theSpeed == 2) {
    //wait then call startTheRace
    theTimerRace = setInterval(function() {startTheRace()}, 0500);
  }

  //fast
  if (theSpeed == 3) {
    //wait then call startTheRace
    theTimerRace = setInterval(function() {startTheRace()}, 0300);
  }

  //super
  if (theSpeed == 4) {
    //wait then call startTheRace
    theTimerRace = setInterval(function() {startTheRace()}, 0005);
  }
}

function blink() {

  if(alternate == false){
    //change picture to blink stop light
    document.getElementById("idPlease").src = "images/blink.png";
    alternate = true;
  }
  else{
    //change picture to green stop light
    document.getElementById("idPlease").src = "images/green-for-go.png";
    alternate = false;
  }
}

function startTheRace() {

    //if not a tie then exicute normaly
    if (myPlace1 == myPlace2 && myPlace1 == "1260" && myPlace2 == "1260") {
      if (flashLeadTime > quiksilverLeadTime) {
        //show racer1
        showWinnerFlash();
      } else {
        //show racer2
        showWinnerQuiksilver();
      }
    }else {
      //moves racer1 if it stays under 1260px
      if (myPlace1 < "1260") {
        //genarate a random number between 1 and 20
        myRacer1 = Math.floor((Math.random() * 20) + 1);

        //makes any last second finsh line crossing impossible
        if (myPlace1 > "1260") {
          //sets myPlace1 to 1260
          myPlace1 = "1260";
        } else {
          //adds random amounts of pixles to the picture
          myPlace1 = myPlace1 + myRacer1;
        }

        //takes a myPlace1 and adds it with px to change to px
        document.getElementById("racer1").style.left = myPlace1 + "px";
      }else {
        //allows for only one winner
        if (someoneWonAlready == false) {
          someoneWonAlready = true;
          showWinner();
        }
      }

      //moves racer2 if it stays under 1260px
      if (myPlace2 < "1260") {
        //genarate a random number between 1 and 10
        myRacer2 = Math.floor((Math.random() * 20) + 1);

        //makes any last second finsh line crossing impossible
        if (myPlace2 > "1260") {
          //sets myPlace2 to 1260
          myPlace2 = "1260";
        } else {
          //adds random amounts of pixles to the picture
          myPlace2 = myPlace2 + myRacer2;
        }

        //takes a myPlace2 and adds it with px to change to px
        document.getElementById("racer2").style.left = myPlace2 + "px";
      }else {
        //allows for only one winner
        if (someoneWonAlready == false) {
          someoneWonAlready = true;
          showWinner();
        }
      }
    }

    //calls the the leader bourd and updates it
    showPlacesLeaderBourd();

    //victory jump and worm hole

}

function showPlacesLeaderBourd() {
  //shows the current leader bourd
  if (myPlace1 == myPlace2) {
    if (nameOfLeader == "Flash") {
      //racer1 is in first place
      document.getElementById("firstPlace").innerHTML = "1. Flash";
      document.getElementById("secondPlace").innerHTML = "2. Quiksilver";
      flashLeadTime = flashLeadTime + 1;
    } else {
      //racer2 is in first place
      document.getElementById("firstPlace").innerHTML = "1. Quiksilver";
      document.getElementById("secondPlace").innerHTML = "2. Flash";
      quiksilverLeadTime = quiksilverLeadTime + 1;
    }
  } else {
    //racer1 is in first place
    if (myPlace1 > myPlace2) {
      document.getElementById("firstPlace").innerHTML = "1. Flash";
      document.getElementById("secondPlace").innerHTML = "2. Quiksilver";
      nameOfLeader = "Flash";
      flashLeadTime = flashLeadTime + 1;
    //racer2 is in first place
    } else {
      document.getElementById("firstPlace").innerHTML = "1. Quiksilver";
      document.getElementById("secondPlace").innerHTML = "2. Flash";
      nameOfLeader = "Quiksilver";
      quiksilverLeadTime = quiksilverLeadTime + 1;
    }
  }
}

function showWinner() {
    if (nameOfLeader == "Flash") {
      //show racer1
      showWinnerFlash();
      lit();
    } else {
      //show racer2
      showWinnerQuiksilver();
      lit();
    }
}

function showWinnerFlash() {

    document.getElementById("theFinalWinner").style.display = "block";
    document.getElementById("theFinalWinner").style.backgroundColor = "#4180b2";
    document.getElementById("theFinalWinner").style.color = "#f6ee15";
    document.getElementById("changeWinner").src = "images/runner-flash-start.png";

  //#4180b2 light blue/ #f6ee15 yellow/ #f03734 red/#ffffff white
}

function showWinnerQuiksilver() {

    document.getElementById("theFinalWinner").style.display = "block";
    document.getElementById("theFinalWinner").style.backgroundColor = "#f03734";
    document.getElementById("theFinalWinner").style.color = "#ffffff";
    document.getElementById("changeWinner").src = "images/runner-quiksilver-start.png";

  //#4180b2 light blue/ #f6ee15 yellow/ #f03734 red/#ffffff white
}

function red(){
  //change picture to red stop light
  document.getElementById("idPlease").src = "images/red-for-stop.png";

  //delete timer
  clearInterval(theTimerRed);

  //delete timer
  clearInterval(theTimerRace);

  //reset stop the race
  startAndStop = false;

  //reset clicked once
  clickOnlyOneMax = false;

  //resets only one winner
  someoneWonAlready == false;

  //reset places and pixle places
  myPlace1 = 120;
  myPlace2 = 120;

  //resets lead time
  flashLeadTime = 0;
  quiksilverLeadTime = 0;

  //reset showwinner
  someoneWonAlready == false;

  //reset leader bourd
  nameOfLeader = "";

  //reset position for racers
  document.getElementById("racer1").style.left = myPlace1 + "px";
  document.getElementById("racer2").style.left = myPlace2 + "px";

  //reset leaderbourd
  document.getElementById("firstPlace").innerHTML = "1. ";
  document.getElementById("secondPlace").innerHTML = "2. ";
}

function disappear() {
  //hides the winner
  document.getElementById("theFinalWinner").style.display = "none";
}

function toggleSetThePace() {
  if (a1 == false) {
      //show on
      document.getElementById("setThePaceHidden").style.display = "block";
      a1 = true;
  }else {
    //show off
    document.getElementById("setThePaceHidden").style.display = "none";
    a1 = false;
  }
}

function toggleAction() {
  if (a2 == false) {
      //show on
      document.getElementById("actionHidden").style.display = "block";
      a2 = true;
  }else {
    //show off
    document.getElementById("actionHidden").style.display = "none";
    a2 = false;
  }
}

function toggleBets() {
  if (a3 == false) {
      //show on
      document.getElementById("betsHidden").style.display = "block";
      a3 = true;
  }else {
    //show off
    document.getElementById("betsHidden").style.display = "none";
    a3 = false;
  }
}

function toggleSides() {
  if (a4 == false) {
      //show on
      document.getElementById("sidesHidden").style.display = "block";
      a4 = true;
  }else {
    //show off
    document.getElementById("sidesHidden").style.display = "none";
    a4 = false;
  }
}

function changeSpeed(sentSpeed) {
  //get and change the speed of the racers
  theSpeed = sentSpeed;
}
