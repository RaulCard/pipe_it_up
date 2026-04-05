// =============================================================
//  pipe.js — Animates the lilpipe box bouncing around its tile
//
//  The lilpipe (small blue square) moves clockwise around the
//  inside edge of the section-pipe tile. It uses 4 boolean
//  direction flags to track which side it's currently traveling
//  along, and computes the turn boundaries from the actual
//  rendered dimensions of the tile and the lilpipe itself.
//
//  WHY COMPUTED DIMENSIONS instead of hardcoded numbers:
//    The tile and lilpipe sizes are set in CSS using --size and
//    calc(), which depend on the --scale variable. If you change
//    --scale in pipe.css, the animation boundaries update
//    automatically here — no magic numbers to hunt down.
//
//  FUTURE HOOKS (Tile 1 / Pipe It Up):
//    - Pipe button: increase `speed` on each click
//    - Escape mechanic: when speed exceeds a threshold, detach
//      lilpipe from the tile and fly it in a random direction
//    - Up button: start audio + color-cycling interval
// =============================================================


// --- Element references ---
// The small blue square that moves around inside section-pipe
const lilpipe = document.querySelector('.element-lilpipe');


// --- Compute movement boundaries from live CSS dimensions ---
// We read the *rendered* size of both elements after CSS applies,
// so --scale changes in pipe.css automatically flow through here.
const pipeStyle    = getComputedStyle(document.querySelector('.section-pipe'));
const lilpipeStyle = getComputedStyle(lilpipe);

// Maximum pixel offset before lilpipe hits the right/bottom wall.
// = (tile size) - (lilpipe size), because position is from the top-left corner.
const widthEdge  = parseInt(pipeStyle.width)  - parseInt(lilpipeStyle.width);
const heightEdge = parseInt(pipeStyle.height) - parseInt(lilpipeStyle.height);


// --- Position state ---
let hor  = 0;  // Current horizontal offset in px (CSS left)
let vert = 0;  // Current vertical offset in px (CSS top)


// --- Speed ---
// Pixels moved per interval tick. Increase this to speed up the animation.
// The Pipe button (not yet wired) should call something like: speed += 0.5;
let speed = 1;


// --- Direction flags ---
// Only one flag should be true at a time. The sequence is:
//   right → down → left → up → right → ...  (clockwise)
// Starting with right = true means the box begins by moving right.
let right = true;
let down  = false;
let left  = false;
let up    = false;


// -------------------------------------------------------------
//  move()
//  Called on every interval tick. Advances position by `speed`
//  in whichever direction is currently active, then checks if
//  we've hit the boundary and need to turn.
//
//  The else-if chain ensures only one branch runs per tick,
//  which prevents diagonal movement or double-stepping at corners.
// -------------------------------------------------------------
function move() {

    if (right) {
        hor += speed;
        lilpipe.style.left = hor + 'px';
        // Hit the right wall — turn to go downward
        if (hor >= widthEdge) { right = false; down = true; }

    } else if (down) {
        vert += speed;
        lilpipe.style.top = vert + 'px';
        // Hit the bottom wall — turn to go leftward
        if (vert >= heightEdge) { down = false; left = true; }

    } else if (left) {
        hor -= speed;
        lilpipe.style.left = hor + 'px';
        // Hit the left wall — turn to go upward
        if (hor <= 0) { left = false; up = true; }

    } else if (up) {
        vert -= speed;
        lilpipe.style.top = vert + 'px';
        // Hit the top wall — turn to go rightward, completing the loop
        if (vert <= 0) { up = false; right = true; }
    }
}


// --- Start the animation loop ---
// No delay argument = runs as fast as the browser allows (~4ms minimum).
// If you want a fixed FPS, pass a millisecond value: setInterval(move, 16)
// would target ~60fps.
setInterval(move);