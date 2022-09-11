const startBtn = document.querySelector('#startBtn');
const resetBtn = document.querySelector('#resetBtn');
let shotsHit = document.querySelector('#shotsHit');
let shotsMissed = document.querySelector('#shotsMissed');
let scoreTotal = document.querySelector('#scoreTotal')
const board = document.querySelector('#board');
const ctx = board.getContext('2d');
const gameWidth = board.width;
const gameHeight = board.height;
const boardBackground = 'black';
const targetColor = 'red';
const unitSize = 25;
let score = 0;
let hits = 0;
let misses = 0;
let target = {
	x: 0,
	y: 0,	
};
let targets = [];

function clear() {
	ctx.fillStyle = boardBackground;
	ctx.fillRect(0, 0, gameWidth, gameHeight);
}


startBtn.onclick =  () => {
	createTarget();
};

resetBtn.onclick = () => {
	reset();
};

function createTarget() {
	function randomTarget(min, max){
		const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
		return randNum;
	};
	
		target.x = randomTarget(0, gameWidth - unitSize),
	    target.y = randomTarget(0, gameWidth - unitSize),	
	drawTarget();
};

function drawTarget() {
	ctx.fillStyle = targetColor;
	ctx.fillRect(target.x, target.y, unitSize, unitSize);	
};
 
    document.addEventListener('DOMContentLoaded', () => {
	board.addEventListener('click', check);		
});

function check(ev) {
	console.log(ev.offsetX, ev.offsetY);
	let shot = {
		x: ev.offsetX,
		y: ev.offsetY
	};	
	let onTarget = false;	
	switch(true) {
		case((shot.x >= target.x && shot.x <= target.x + unitSize) && (shot.y >= target.y && shot.y <= target.y + unitSize)):
			onTarget = true;
			break;		
	};
	if(onTarget == true ) {				
    	hits +=1;
    	clear();
    	createTarget();	    	
    } else {
     	misses +=1;
     	
    };
    updateScores();  
};


function updateScores() {
	score = hits - misses;
	shotsHit.innerHTML = hits;
	shotsMissed.innerHTML = misses;
	scoreTotal.innerHTML = score;
};

function gameOver () {
	
};

function reset() {
	clear();
	score = 0;
	hits =0;
	misses = 0;
	updateScores();
};






