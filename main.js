const noBtn = document.querySelector('.button2');

function dodge() {
    // 1. Get the current screen width and height
    const width = window.innerWidth;
    const height = window.innerHeight;

    // 2. Calculate a new position 
    // We subtract 100 to make sure the button doesn't go off the right/bottom edge
    // We add 50 to make sure it doesn't get stuck at the very top/left
    const newX = Math.floor(Math.random() * (width - 100)) + 50;
    const newY = Math.floor(Math.random() * (height - 100)) + 50;

    // 3. Apply the new coordinates
    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
}

// For Desktop: Moves when the mouse gets close
noBtn.addEventListener('mouseover', dodge);

// For Mobile: Moves the instant a finger touches it
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // This stops the phone from clicking the button
    dodge();
});
