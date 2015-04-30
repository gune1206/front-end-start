$(document).ready(function () {
  var box= $('.box');
  var score=0;
  var x=10;

function randomNumber(endNum){
	return Math.floor(Math.random()*endNum)+1;
}

function moveBox(){
	var value=x+5;
	box.style.left=value+'px';
	x=value;
}
function startMove(){
	console.log('start')
	window.setInterval(randomMove, 700);
}
function randomMove(){

	var x = randomNumber(950)
    var y = randomNumber(450)
	
	box.css({
        'left': x,
        'top': y
    });

	
}
function addGrade(){
	scoreGrade++;
    scoreGrade_text.innerHTML = score;
}
box.click(function(){
    ++score;
    scoreGrade.innerHTML = score;
});
startMove();

});
