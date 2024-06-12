// Function to generate a random number within a range
function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to create a new ball element
function createBall() {
    const ball = document.createElement('div');
    ball.classList.add('ball');
    ball.style.left = `${randomInRange(-5000, window.innerWidth + 5000)}px`;
    ball.style.top = `${randomInRange(-5000, window.innerHeight + 5000)}px`;
    document.getElementById('ball-container').appendChild(ball);
}

// Function to update ball positions
function updateBallPositions() {
    const balls = document.querySelectorAll('.ball');
    balls.forEach(ball => {
        const speed = 1; // Adjust speed as needed
        const angle = randomInRange(0, 360);
        const vx = speed * Math.cos(angle);
        const vy = speed * Math.sin(angle);
        let x = parseFloat(ball.style.left);
        let y = parseFloat(ball.style.top);
        x += (vx + 1);
        y += (vy + 1);
        ball.style.left = `${x}px`;
        ball.style.top = `${y}px`;

        // Reset position if ball goes out of screen
        if (x < -5000 || x > window.innerWidth + 5000 || y < -5000 || y > window.innerHeight + 50) {
            ball.style.left = `${randomInRange(-5000, window.innerWidth + 5000)}px`;
            ball.style.top = `${randomInRange(-5000, window.innerHeight + 5000)}px`;
        }
    });
}

// Animation loop
function animateBalls() {
    updateBallPositions();
    requestAnimationFrame(animateBalls);
}

// Create initial balls
for (let i = 0; i < 5000; i++) {
    createBall();
}

// Start animation
animateBalls();
