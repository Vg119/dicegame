var rand = Math.floor(Math.random()*6) +1;
var str = "./images/dice"+rand+".png";
document.querySelector(".img1").setAttribute("src",str);

var rand1 = Math.floor(Math.random()*6) +1;
var str1 = "./images/dice"+rand1+".png";
document.querySelector(".img2").setAttribute("src",str1);

if(rand>rand1)
var res = "Player 1 wins !";
else if(rand<rand1)
var res = "Player 2 wins !";
else 
var res = "Draw !!";

document.querySelector(" h1 ").textContent = res ;





