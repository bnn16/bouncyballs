let input = document.getElementById('input');
let button = document.getElementById('spawn-circles');


button.addEventListener('click', function() {
    let circlesNeeded = input.value;
    const height = window.innerHeight;
    const width = window.innerWidth;
    // add if check 
    for(let i = 0; i < circlesNeeded; i++) {
        const circleInner = document.createElement('div');

        const randomCol = generateRandomColor();


        const randomSize = random(250);
        //spawn circles a little bit inside the window, 
        // so they don't get cut off or get stuck on the edge if spawned there
        // idk how to make them spawn on the edge and not get cut off 
        const randomTop = random(height - randomSize);
        const randomLeft = random(width - randomSize);

        circleInner.setAttribute('class', 'dot');
        circleInner.style.backgroundColor = randomCol;
        circleInner.style.top = randomTop + "px";
        circleInner.style.width = randomSize + 'px';
        circleInner.style.height = randomSize + 'px';
        circleInner.style.left = randomLeft + "px"; 

      
        document.body.appendChild(circleInner);

        function animate() {
            let directionX = random(100) < 50 ? -1 : 1;
            let directionY = random(100) < 50 ? -1 : 1;
            let speed = random(5) + 1;
            let move = function() {
                let rect = circleInner.getBoundingClientRect();
                // if the circle hits the edge of the window, invert/change the direction
                if (rect.left < 0 || rect.right > width) {
                    directionX = -directionX;
                }
                if (rect.top < 0 || rect.bottom > height) {
                    directionY = -directionY;
                }
                
                circleInner.style.left = (rect.left + speed * directionX) + 'px';
                circleInner.style.top = (rect.top + speed * directionY) + 'px';
                requestAnimationFrame(move);
            }
            requestAnimationFrame(move);
        };
        animate();
    }
});

function generateRandomColor() {
    return `rgb(${random(255)},${random(255)},${random(255)})`;
}


function random(val) {
    return Math.floor(Math.random() * val);
}