// --- Archive UI (legacy) ---
// This file is intentionally preserved as the "old UI" easter egg.
// Cleaned: removed document.write(), fixed duplicate var declarations,
// removed dead/commented-out code blocks.

// --- Prompt on load ---
var user = prompt("Please Enter Your Name", "Sir Dipshit");
var output = document.createElement('p');
output.textContent = user + ", Screw You";
document.body.prepend(output);

// --- Person constructor ---
function Person(name, age, ugliness) {
    this.name     = name;
    this.age      = age;
    this.ugly     = ugliness;
    this.DoB      = getBorn;
    this.siblings = ["Al", "Frank"];
}

function getBorn() {
    return 2018 - this.age;
}

var p1 = new Person(user, 100, 20);

var statsEl = document.createElement('p');
statsEl.textContent = p1.ugly + " out of 100 ugliness — sibling: " + p1.siblings[0];
document.body.appendChild(statsEl);

// --- Timestamp ---
var d = new Date();
var timeEl = document.createElement('p');
timeEl.textContent = "You were confirmed ugly at: " + d + " specifically at: " + d.getHours() + " Hours.";
document.body.appendChild(timeEl);

// --- DOM manipulation ---
var timeElems = document.getElementsByClassName("time");
var imageEl   = document.getElementById("image");
if (imageEl) imageEl.src = "/static/images/red.jpg";

if (timeElems[1]) timeElems[1].style.color = "red";

var newP    = document.createElement("p");
var newText = document.createTextNode("Additional Info");
newP.appendChild(newText);
var underElems = document.getElementsByClassName("under");
if (underElems[0]) underElems[0].appendChild(newP);

// --- Misc interactions ---
function func() {
    alert("Yes, Master?");
}

function validate() {
    var algoInputs = document.getElementsByClassName("algo");
    if (algoInputs[0] && algoInputs[0].value === "lifestyle") {
        alert("ozzy!!!");
    }
}

// --- Image slider ---
var sliderImages = [
    "http://www.sololearn.com/uploads/slider/1.jpg",
    "http://www.sololearn.com/uploads/slider/2.jpg",
    "http://www.sololearn.com/uploads/slider/3.jpg"
];
var sliderIndex = 0;

function next() {
    sliderIndex = (sliderIndex + 1) % sliderImages.length;
    document.getElementById("slider").src = sliderImages[sliderIndex];
}

function prev() {
    sliderIndex = (sliderIndex - 1 + sliderImages.length) % sliderImages.length;
    document.getElementById("slider").src = sliderImages[sliderIndex];
}

// --- Color wheel (Udit button) ---
var colorTick  = 0;
var wheelActive = false;

function setIKnow() {
    if (!wheelActive) {
        wheelActive = true;
        setInterval(iKnow, 1);
    } else {
        wheelActive = false;
        document.getElementById("box").style.background       = "orange";
        document.getElementById("container").style.background = "blue";
    }
}

var colorSets = [
    { box: "lime",   container: "DeepPink"  },
    { box: "red",    container: "white"     },
    { box: "black",  container: "indigo"    },
    { box: "pink",   container: "aqua"      },
    { box: "yellow", container: "RoyalBlue" }
];

function iKnow() {
    if (!wheelActive) return;
    colorTick++;
    var set = colorSets[(colorTick * 467) % colorSets.length];
    document.getElementById("box").style.background       = set.box;
    document.getElementById("container").style.background = set.container;
}

// --- Pipe It Up (Up button) ---
var pipeSize = 50;
var vid      = document.getElementById("trance");

function setWheel() {
    var bubble = document.getElementById("lifestyle");
    if (bubble) bubble.innerHTML = "Piped";
    if (vid)    vid.play();
    setInterval(reinventingTheWheel, 5);
}

function reinventingTheWheel() {
    pipeSize++;
    var box = document.getElementById("box");
    box.style.width  = pipeSize + "px";
    box.style.height = pipeSize + "px";
}

// --- Button bindings ---
document.getElementById("aris").addEventListener("click", whoKnows);
document.getElementById("udit").addEventListener("click", setIKnow);
document.getElementById("lifestyle").addEventListener("click", setWheel);

// --- Bouncing box ---
var boxInterval = setInterval(moveBox, 50);
var posX  = 0;
var posY  = 0;
var goRight = false;
var goDown  = false;
var goLeft  = false;
var goUp    = false;
var box     = document.getElementById("box");

function whoKnows() {
    goRight = false;
    goLeft  = false;
    goDown  = false;
    goUp    = false;
}

function moveBox() {
    if (!goRight) {
        posX += 2;
        box.style.left = posX + "px";
        if (posX >= 150) { goRight = true; goDown = false; }
    }
    if (goRight && !goDown) {
        posY += 2;
        box.style.top = posY + "px";
        if (posY >= 150) { goDown = true; goLeft = false; }
    }
    if (goRight && goDown && !goLeft) {
        posX -= 2;
        box.style.left = posX + "px";
        if (posX <= 0) { goLeft = true; goUp = false; }
    }
    if (goRight && goDown && goLeft && !goUp) {
        posY -= 2;
        box.style.top = posY + "px";
        if (posY <= 0) { goUp = true; goRight = false; }
    }
}
