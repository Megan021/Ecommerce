
  //  JavaScript for Toggle Menu 

var navLinks = document.getElementById("navLinks");
function showMenu(){
  navLinks.style.right = "0";
}
function hideMenu(){
  navLinks.style.right = "-200px";
}


//  JavaScript for Signin / Signup Toggle

var x= document.getElementById("Signin");
var y= document.getElementById("Signup");
var z= document.getElementById("btn");

function signup() {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
}
function signin() {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0px";
}