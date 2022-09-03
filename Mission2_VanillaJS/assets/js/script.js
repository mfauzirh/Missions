// Declare Animation
function environtmentAnimation() {
    let midground = document.getElementById('midground');
    let foreground = document.getElementById('foreground');

    let speedx = 1;
    let positionX = 0;

    function step() {
        positionX = positionX + speedx;
        midground.style.backgroundPositionX = -positionX / 4 + 'px';
        foreground.style.backgroundPositionX = -positionX + 'px';
        cloud.style.backgroundPositionX = -positionX / 4 + 'px';
        window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
}

function diverAnimation() {
    const maxYPosition = 100;
    let speedY = 1;
    let positionY = 0;

    function step() {
        positionY = positionY + speedY;
        if(positionY )

        if (positionY > maxYPosition || positionY < 0) {
            speedY = speedY * (-1);
        }
        diver.style.bottom = positionY + 'px';
        window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
}

diverAnimation()

function fishAnimation() {
    const maxYPosition = 100;
    let speedY = 0.6;
    let positionY = 0;

    function step() {
        positionY = positionY + speedY;

        if(positionY > maxYPosition) {
            fish.style.transform = "scale(-1, 1)";
        } else if(positionY <= 0) {
            fish.style.transform = "scale(1, 1)";
        }
        
        if (positionY > maxYPosition || positionY < 0) {
            speedY = speedY * (-1);
        }
        // spaceship.style.top = positionY + 'px';
        fish.style.right =  positionY*2 + 'px';
        window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
}

function fish2Animation() {
    const maxYPosition = 100;
    let speedY = 1;
    let positionY = 0;

    function step() {
        positionY = positionY + speedY;

        if(positionY >= maxYPosition) {
            fish2.style.transform = "scale(1, 1)";
        } else if(positionY <= 0) {
            fish2.style.transform = "scale(-1, 1)";
        }
        
        if (positionY > maxYPosition || positionY < 0) {
            speedY = speedY * (-1);
        }
        // spaceship.style.top = positionY + 'px';
        fish2.style.left =  positionY*2 + 'px';
        window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
}

function seaHorseAnimation() {
    const maxYPosition = 100;
    let speedY = 0.4;
    let positionY = 0;

    function step() {
        positionY = positionY + speedY;

        if(positionY >= maxYPosition) {
            seahorse.style.transform = "scale(1, 1)";
        } else if(positionY <= 0) {
            seahorse.style.transform = "scale(-1, 1)";
        }
        
        if (positionY > maxYPosition || positionY < 0) {
            speedY = speedY * (-1);
        }
        // spaceship.style.top = positionY + 'px';
        seahorse.style.right =  positionY*2 + 'px';
        window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
}

function shipAnimation() {
    const maxYPosition = 100;
    let speedY = 1;
    let positionY = 0;

    function step() {
        positionY = positionY + speedY;
        if(positionY )

        if (positionY > maxYPosition || positionY < 0) {
            speedY = speedY * (-1);
        }
        ship.style.left = positionY + 'px';
        window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
}

function jellyfishAnimation() {
    const maxYPosition = 100;
    let speedY = 1;
    let positionY = 0;

    function step() {
        positionY = positionY + speedY;
        if(positionY )

        if (positionY > maxYPosition || positionY < 0) {
            speedY = speedY * (-1);
        }
        jellyfish1.style.left = positionY + 'px';
        jellyfish1.style.top = -positionY + 'px';
        
        jellyfish2.style.right = -positionY/2 + 'px';
        jellyfish2.style.top = -positionY/2 + 'px';
        window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
}

// Start animation
environtmentAnimation();
fishAnimation()
fish2Animation()
seaHorseAnimation()
shipAnimation()
jellyfishAnimation()

// Type Animation

var counter = 0;
var txt = "The number of oceans on earth that have been explored is 57.8 percent of the total 70 percent of the oceans on the earth's surface. So that there are still about 13.2 percent of the ocean that has not been explored by humans.";
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (counter < txt.length) {
    document.getElementById("textContent").innerHTML += txt.charAt(counter);
    counter++;
    setTimeout(typeWriter, speed);
  } 
}

// Move To Section
function scrollToBottom(){
    counter=0;
    document.getElementById("textContent").innerHTML = '';
    var getMeTo = document.getElementById("deepOcean");
    getMeTo.scrollIntoView({behavior: 'smooth'}, false);
    typeWriter()
}
function scrollToTop(){
    var getMeTo = document.getElementById("highOcean");
    getMeTo.scrollIntoView({behavior: 'smooth'}, false);
}
