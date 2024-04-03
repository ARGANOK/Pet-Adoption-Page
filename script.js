document.addEventListener('keydown', function(event) {
const element = document.querySelector('.container').offsetWidth ;
const topBar = document.getElementById('top-line')
const bottomBar = document.getElementById('bottom-line')
const speed = 50;
const intialPosition = (element- topBar.offsetWidth)/2
let start = parseInt(topBar.style.left || intialPosition);
const keypressed = event.key;
if(keypressed === 'ArrowLeft'){
    if(start-speed > 0){
        start -= speed;
        animateBars()
    }
}
else if(keypressed === 'ArrowRight'){
    if(start+speed < element-(3*speed)){
        start += speed;
        animateBars()
    }
}
moveBar(topBar , start);
moveBar(bottomBar, start);

});
function animateBars() {
    requestAnimationFrame(function() {
        moveBar(topBar, currentPosition);
        moveBar(bottomBar, currentPosition);
    });
}
function moveBar(barToMove , positionToSet){
    barToMove.style.left = positionToSet+'px';
}

document.addEventListener('DOMContentLoaded' , function(){
    const ball = document.getElementById('ball');
    let ballX = 0;
    let ballY = 0;
    let velX = 0; // Velocity in the X direction
    let velY = 0; // Velocity in the Y direction
    let moveIntervalId;

    function moveBall() {
        ballX += velX;
        ballY += velY;
        ball.style.left = ballX + 'px';
        ball.style.top = ballY + 'px';
    }
    function handleKeyPress(event) {
        if (event.key === 'Enter' && !moveIntervalId) {
            // Generate random velocities between -5 and 5
            velX = Math.floor(Math.random() * 11) - 5;
            velY = Math.floor(Math.random() * 11) - 5;
            moveIntervalId = setInterval(moveBall, 50); // Move the ball every 50 milliseconds
        }
    }
    document.addEventListener('keydown', handleKeyPress);
})  