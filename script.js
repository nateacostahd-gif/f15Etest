// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case
// Check out the power of the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp
// Transparent, Translucent, Opaque: https://www.mathsisfun.com/physics/images/transparent.svg
// Directly choose the attribute and set it: https://www.w3schools.com/jsref/met_element_setattribute.asp
// Invisible vs. None: https://www.w3schools.com/Css/tryit.asp?filename=trycss_display

function seeThruGreen() {}

function seeThruPurple() {}

function seeThruRed() {}

// rename this function so it's name is describes what it does!

function playSound1() {
  document.getElementById("gun-click").play();
  //document.getElementById("fire-click").play();
  document.getElementById("cockpit").src = "gif/fire_vulcan.gif";

  setTimeout(() => {
    // Replace the animated GIF source with the static image source
    document.getElementById("cockpit").src = "images/newafter_lock.png";
  }, 9600);
}
function playSound2() {
  document.getElementById("gear-click").play();
}
function playSound3() {
  document.getElementById("flare-click").play();
  //document.getElementById("fire-click").play();
  document.getElementById("cockpit").src = "gif/flare_flare.gif";

  setTimeout(() => {
    // Replace the animated GIF source with the static image source
    document.getElementById("cockpit").src = "images/newafter_lock.png";
  }, 6000);
}
function playSound4() {
  document.getElementById("lock-click").play();
  document.getElementById("cockpit").src = "gif/newradar_lock.gif";

  setTimeout(() => {
    // Replace the animated GIF source with the static image source
    document.getElementById("cockpit").src = "images/newafter_lock.png";
    document.getElementById("missile").src = "images/aim_120c.png";
  }, 4500);
}
function playSound5() {
  document.getElementById("brake-click").play();
}
function playSound67() {
  document.getElementById("linkin-click").play();
}
function playSound8() {
  document.getElementById("missile-click").play();
  //document.getElementById("fire-click").play();
  document.getElementById("cockpit").src = "gif/fire_missile.gif";

  setTimeout(() => {
    // Replace the animated GIF source with the static image source
    document.getElementById("cockpit").src = "images/newafter_lock.png";
  }, 8500);
}
