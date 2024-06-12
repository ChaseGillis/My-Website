import React, { useEffect } from 'react';

const Balls: React.FC = () => {
  useEffect(() => {
    // Function to create a new ball element
    const createBall = () => {
      const ball = document.createElement('div');
      ball.classList.add('ball');
      const ballContainer = document.getElementById('ball-container');
      if (ballContainer) {
        ballContainer.appendChild(ball);
      }
      return ball;
    };

    const updateBallPositions = () => {
        const balls = document.querySelectorAll('.ball');
        balls.forEach(ball => { // Fix: remove extra closing parenthesis
          const vh = window.innerHeight; // Viewport height
          const angle = vh; // Angle in radians
          const speed = 0.2; // Adjust as needed
      
          // Define velocity variables (start with 0)
          let vx = 0;
          let vy = 0;
      
          // Update velocity based on random direction and speed
          vx += (Math.random() - 0.5) * speed; // Random horizontal velocity between -speed and speed
          vy = speed * Math.sin(angle); // Vertical velocity

            // Update position based on velocity
        let x = parseFloat((ball as HTMLElement).style.left) || Math.random() * 200 - 100;
        let y = parseFloat((ball as HTMLElement).style.top) || Math.random() * 100;
        x += vx;
        y += vy;

        // Keep balls within screen boundaries
        x = x + 100;
        y = y - 100;

        // Update ball position
        (ball as HTMLElement).style.left = `${x}px`;
        (ball as HTMLElement).style.top = `${y}px`;

      
          // Handle edge cases and reset position smoothly
          if (x < -50) { // Adjust boundary values as needed
            vx = Math.abs(vx); // Reverse horizontal velocity on left edge
          } else if (x > 150) { // Adjust boundary values as needed
            vx = -Math.abs(vx); // Reverse horizontal velocity on right edge
          }
      
          if (y < 0) { // Adjust boundary values as needed
            vy = Math.abs(vy); // Reverse vertical velocity on top edge
          } else if (y > 100) { // Adjust boundary values as needed
            vy = -Math.abs(vy); // Reverse vertical velocity on bottom edge
          }
        }); // Add missing closing curly brace
      };
      
      

    // Animation loop
    const animateBalls = () => {
      updateBallPositions();
      requestAnimationFrame(animateBalls);
    };

    // Create initial balls
    const numBalls = 30; // Adjust the number of balls as needed
    for (let i = 0; i < numBalls; i++) {
      createBall();
    }

    animateBalls();

    // Cleanup function
    return () => {
      const balls = document.querySelectorAll('.ball');
      balls.forEach(ball => {
        ball.remove();
      });
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  return null; // Since this component is managing the DOM directly, it doesn't need to render anything
};

export default Balls;
