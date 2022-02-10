var n  = Math.random();
n = n * 6;
var randomNumber1 = Math.floor(n) + 1;

var x  = Math.random();
x = x * 6;
var randomNumber2 = Math.floor(x) + 1;

var randompng1 = "images/dice"+randomNumber1+".png";

var randompng2 = "images/dice"+randomNumber2+".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randompng1)
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randompng2)

if (randomNumber2 > randomNumber1){
  var x = document.querySelector("h1")
  x.innerHTML= "Player 2 WON";
} else if (randomNumber1 > randomNumber2){
  var z = document.querySelector("h1")
  z.innerHTML = "Player 1 WON";
} else {
  var s = document.querySelector("h1")
  s.innerHTML= "Draw";
}
