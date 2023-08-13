var rand = Math.floor(Math.random()*6) +1;
//console.log(rand);

if(rand===1)
document.querySelector(".img1").setAttribute("src","./images/dice1.png");
else if(rand === 2)
document.querySelector(".img1").setAttribute("src","./images/dice2.png");
else if(rand === 3)
document.querySelector(".img1").setAttribute("src","./images/dice3.png");
else if(rand===4)
document.querySelector(".img1").setAttribute("src","./images/dice4.png");
else if(rand===5)
document.querySelector(".img1").setAttribute("src","./images/dice5.png");
else if(rand===6)
document.querySelector(".img1").setAttribute("src","./images/dice6.png");

var rand1 = Math.floor(Math.random()*6) +1;
if(rand1===1)
document.querySelector(".img2").setAttribute("src","./images/dice1.png");
else if(rand1 === 2)
document.querySelector(".img2").setAttribute("src","./images/dice2.png");
else if(rand1 === 3)
document.querySelector(".img2").setAttribute("src","./images/dice3.png");
else if(rand1===4)
document.querySelector(".img2").setAttribute("src","./images/dice4.png");
else if(rand1===5)
document.querySelector(".img2").setAttribute("src","./images/dice5.png");
else if(rand1===6)
document.querySelector(".img2").setAttribute("src","./images/dice6.png");

if(rand>rand1)
var res = "Player 1 wins !";
else if(rand<rand1)
var res = "Player 2 wins !";
else 
var res = "Draw !!";

document.querySelector(" h1 ").textContent = res ;





