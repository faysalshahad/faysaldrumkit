//alert("hello, javascriptfile is linked with html file successfully.");

/* Adding a addEventListener properties to call a function which will wait for
the user to click on the button and then it will call up the following function
named handleClick.

If we add all buttons to the for loop then it will cause interference with the
other buttons and affect their functionalities.
Instead of targetting all buttons, we are targetting those buttons with the
class defined as drum.*/

//=================== Start of Detecting Button Press Codes====================

// Detecting Button Press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for ( var i = 0; i<numberOfDrumButtons; i++ ) { // for loop starts

  document.querySelectorAll(".drum")[i].addEventListener("click", handleSound );

  function handleSound() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

    }

    } // for loop ends

    //----------------------- End of Detecting Button Press Codes----------

    //=================== Start of Detecting Keyboard Press Codes==================

    document.addEventListener ("keypress", function (event){

      makeSound(event.key);

      buttonAnimation(event.key);

    });

    //----------------------- End of Detecting Keyboard Press Codes---------------

    //======= Start of Make Sound and Switch Statements Codes==================

    function makeSound(key) {

// following codes will check each case when user will either click or keypress
          switch (key) {
            case "w":

            var tom1 = new Audio ("sounds/tom-1.mp3");
            tom1.play();

              break;

              case "a":

              var tom2 = new Audio ("sounds/tom-2.mp3");
              tom2.play();

                break;

                case "s":

                var tom3 = new Audio ("sounds/tom-3.mp3");
                tom3.play();

                  break;

                  case "d":

                  var tom4 = new Audio ("sounds/tom-4.mp3");
                  tom4.play();

                    break;

                    case "j":

                    var snare = new Audio ("sounds/snare.mp3");
                    snare.play();

                      break;

                      case "k":

                      var crash = new Audio ("sounds/crash.mp3");
                      crash.play();

                        break;

                        case "l":

                        var kick_bass = new Audio ("sounds/kick-bass.mp3");
                        kick_bass.play();

                          break;


/* When the top cases are not matching then the following code will execute.
 Suppose if user does not press on the exact button or image or does not press
 the exact Keyboard keys then the following code will execute. The concept is
 same as if and else statement. */
            default: console.log(buttonInnerHTML);

    }; // End of switch statement

  } // End of make sound function

    //------------- End of  Make Sound and Switch Statements---------------


//======= Start of Button Animation Function==================


function buttonAnimation(currentKey) {

/* Creating variable for identifying the exact button which will be clicked or
keyboard pressed by the user. Selecting the current button by concatanating
"." with parameter or argument "currentKey".
*/
var activeButton = document.querySelector("." + currentKey);

/* Identifying the classList for the variable activeButton and adding the
predefined class called "pressed" into them. The class called "pressed" has been
defined in the css file previously.
*/
activeButton.classList.add("pressed");

/* This is a specailized method called setTimeout() which is used to call a
function after a predefined number of miliseconds. In this case we have defined
2 miliseconds which has been declared by 200. The process to call this method is
myTimeout = setTimeout(function, milliseconds);
*/
setTimeout ( function() {

  activeButton.classList.remove("pressed"); // removing the pressed class here
}, 200); // 200 is referring to 2 miliseconds.

}

//------------- End of Button Animation Function---------------

    /*

    this.style.color = "green";  This code will help to change the color of
    the button or HTML element to green whenever it will be clicked.*/
    /*for loop can also be written in a following manner in shorter version.

    While creating a Constructor function we must need to use capital letter
    in the very first word of the function name to distinguish the Constructor
    function from all other functions. This is the rule and law to create a
    Constructor function.



    for ( var i = 0; i<document.querySelectorAll(".drum").length; i++ ) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
      alert("I got Clicked just now.");
    });

    }

    */

    /*The code above could be written as the following manner which is not
    recommended way of doing code. Althouhg, It performs the exact functionality
    as above and it is a shorter version.

    document.querySelector("button").addEventListener("click", function {
      alert("I got Clicked just now.");
    });

    The function does not have a name. Thus it is known as an anonymous function.
    */

    /* Code to play audio sounds in your website
    var audio = new Audio ("sounds/tom-1.mp3");
    audio.play();
    */

    /*
    This particular piece of code will help you identify the exact button object in
    the console log from the html whenever we are clicking on any of them.
    console.log(this);
    The following code will printout the innerHTML of each button in the console log
    whenever these buttons will be pressed.
    console.log(this.innerHTML);

    */


    /*
    This particular piece of code will help you identify the exact button object in
    the console log from the html whenever we are clicking on any of them.
    console.log(this);
    The following code will printout the innerHTML of each button in the console log
    whenever these buttons will be pressed.
    console.log(this.innerHTML);

    */
