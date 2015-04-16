
var box=document.querySelectorAll('.box')[0];
var score=0
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
	
	box.style.left=randomNumber(950)+'px';
	box.style.top=randomNumber(450)+'px';

	
}
function addGrade(){
	scoreGrade++;
    scoreGrade_text.innerHTML = score;
}
box.addEventListener("click", function() {
    ++score;
    scoreGrade.innerHTML = score;
});
startMove();