
//contact constructor
function contactsObject(firstName1, lastName1, phone1, email1, image1, color1, color2) {
  this.firstName = firstName1;
  this.lastName = lastName1;
  this.phone = phone1;
  this.email = email1;
  this.image = image1;
  this.colored = color1;
  this.colord = color2;
  this.showContacts = showContacts1;
}

//Add contacts here
  var contacts = new Array();
  contacts[0] = "Select Contact";
  contacts[1] = new contactsObject("Tyrion", "Lannister", "344-687-9905", "TheDragon@TheThrones.com", "images/tyrion-lannister-peter-dinklage.jpg", "brown", "#ffffff");
  contacts[2] = new contactsObject("Clark", "Kent", "498-567-8977", "UpUpAndAway@TheDailyPlanet", "images/superman.jpg", "blue", "red");
  contacts[3] = new contactsObject("Homer", "Simpson", "425-546-9064", "DonutsAre@TheBomb.com", "images/homer-simpson-2006.png", "pink", "purple");
  contacts[4] = new contactsObject("Pikachu", "Ketchum", "876-879-2332", "ThunderStruck@Pokedex.com", "images/pikachu-6.png", "gold", "#000000");
  contacts[5] = new contactsObject("Po", "Little Lotis", "675-876-8796", "TheDragonWarrior@TheWushiFingerHold.com", "images/kfp.jpg", "green", "gold");

function showContacts1(theIndex) {
  document.getElementById("showPart").style.display = "block";
  document.getElementById("iHideWhenIDont").style.color = this.contacts[theIndex].colord;
  document.getElementById("iHideWhenIDont").style.backgroundColor = this.contacts[theIndex].colored;
  document.getElementById("theFirstName").innerHTML = this.contacts[theIndex].firstName;
  document.getElementById("TheLastName").innerHTML = this.contacts[theIndex].lastName;
  document.getElementById("ThePhoneNumber").innerHTML = this.contacts[theIndex].phone;
  document.getElementById("TheEmail").innerHTML = this.contacts[theIndex].email;
  document.getElementById("swapContactImage").src = this.contacts[theIndex].image;
  document.contactForm.contactName.selectedIndex = 0;
}

//plus and minus
$(document).ready(function() {
    $("#showing h2").click(
        function() {
            $(this).toggleClass("minus");
            $(this).next().slideToggle(1000);
        }
    );  // end click
}); // end ready

//myForm
function useOnLoad() {
  document.myform.getElementsByName("Name").style.display.backgroundColor = "red";
}

//used for validation
var nameFalse = false;
var emailFalse = false;
var phoneFalse = false;

//used for one click
var oneClick = false;

//index of errors
var indexOfText = 1;

 function validateForm() {
   //used for validation
   var validated = false;

   //name
   var theName = document.myForm.Name.value;
   var validateName = theName.length;
   if (validateName >= 6) {
     nameFalse = true;
   }


   //email
   var theEmail = document.myForm.Email.value;
   if (/^[@]/.test(theEmail)) {
    if (/^[.][\w][\w]/.test(theEmail)) {
      emailFalse = true;
    }
   }

   //phone
   var thePhone = document.myForm.Phone.value;
   if (/^[\d][\d][\d][-][\d][\d][\d][-][\d][\d][\d][\d]/.test(thePhone)) {
     phoneFalse = true;
   }

   if (nameFalse == true) {
     if (emailFalse == true) {
       if (phoneFalse == true) {
         validated = true;
       }
     }
   }

   if (validated == true) {
     myForm.submit();
   }else {
     document.getElementById("errorMessage").style.display = "block";
     oneClick = true;
     //call error invalid
     theError = setInterval(function() {errorInvalid()}, 2100);
   }
 }

//one click display none after showing a error
function errorInvalid() {

  oneClick = false;

  if (nameFalse == false) {
    if (indexOfText == 1) {
      document.getElementById("theErrorText").innerHTML = "<b><em>Name is invalid!</em></b>";

    }
  }
  if (emailFalse == false) {
    if (indexOfText == 2) {
      document.getElementById("theErrorText").innerHTML = "<b><em>Email is invalid!</em></b>";
    }
  }
  if (phoneFalse == false) {
    if (indexOfText == 3) {
      document.getElementById("theErrorText").innerHTML = "<b><em>Phone is invalid!</em></b>";
    }
  }
  if (indexOfText == 4) {
    document.getElementById("theErrorText").innerHTML = "<b><em>ERROR!</em></b>";
    document.getElementById("errorMessage").style.display = "none";
    clearInterval(theError);
    indexOfText = 1;
  }
  indexOfText++;
}

function clearInput() {
  document.myForm.reset();
}

//allows for only one radio button choice
 function onlyOneClicked(numberOfClicked) {
   if (numberOfClicked == 1) {
     document.getElementById("s2").checked = false;
     document.getElementById("s3").checked = false;
     document.getElementById("s4").checked = false;
     document.getElementById("s5").checked = false;
   }
   if (numberOfClicked == 2) {
     document.getElementById("s1").checked = false;
     document.getElementById("s3").checked = false;
     document.getElementById("s4").checked = false;
     document.getElementById("s5").checked = false;
   }
   if (numberOfClicked == 3) {
     document.getElementById("s2").checked = false;
     document.getElementById("s1").checked = false;
     document.getElementById("s4").checked = false;
     document.getElementById("s5").checked = false;
   }
   if (numberOfClicked == 4) {
     document.getElementById("s2").checked = false;
     document.getElementById("s3").checked = false;
     document.getElementById("s1").checked = false;
     document.getElementById("s5").checked = false;
   }
   if (numberOfClicked == 5) {
     document.getElementById("s2").checked = false;
     document.getElementById("s3").checked = false;
     document.getElementById("s4").checked = false;
     document.getElementById("s1").checked = false;
   }

 }
