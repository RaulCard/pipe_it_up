
// Variables
var hor = 0; 
var vert = 0;
var right = true;
var down, left, up = false;
var edge = 134;
var speed = 1; // Default 1

pipeWidth = getComputedStyle(document.querySelector('.section-pipe'));
lilPipeWidth = getComputedStyle(document.querySelector('.element-lilpipe'));
var widthEdge = parseInt(pipeWidth.width) - parseInt(lilPipeWidth.width); // Edge of box - edge of lilpipe (134)
var heightEdge = parseInt(pipeWidth.height) - parseInt(lilPipeWidth.height);

// Pipe It Up Section
setInterval(move);

function move() {
	if(right){
        hor += speed;
        lilpipe.style.left = hor + "px";
		if(hor >= widthEdge) { right = false; down = true}
	}
	else if(!right && down){
        vert += speed;
        lilpipe.style.top = vert + "px";
		if(vert >= heightEdge) { down = false; left = true}
	}
	else if(!right && !down && left){
        hor += -speed;
        lilpipe.style.left = hor + "px";
		if(hor <= 0) { left = false; up = true}
	}
	else if(!right && !down && !left && up){
        vert += -speed;
        lilpipe.style.top = vert + "px";
		if(vert <= 0){ up = false; right = true}
	}

    // Speed
    // speed += 0.1
    // if (speed < 50){ speed += 0.001}
    // else { speed -= 1 }
}
