var name="Screw You";

function print(nombre){
	document.write("<br>"+nombre+", Screw You");
}

var user = prompt("Please Enter Your Name","Sir Dipshit");
print(user);

// user = confirm("Are you really this ugly?");
// if(user){
// 	alert("I'm glad we can agree");
// }
// else{
// 	alert("Stop lying to yourself");
// }

function person(name,age,uglyness){
	this.name = name;
	this.age = age;
	this.ugly = uglyness;
	this.DoB = getBorn;
	this.siblings = ["Al","Frank"];
}

var p1 = new person(user,100,20);
document.write("<br>"+p1.ugly+" out of 100 uglyness");
document.write("<br>"+p1.siblings[0]);

function getBorn(){
	return 2018 - this.age;
}

//document.write("<br>"+p1.DoB()+Math.sqrt(4)); //MATH OPERATION


/* BUG RETIRED
function bug(){
	alert("Hi");
}
setInterval(bug,5000);
*/


var d = new Date();
document.write("<br>"+"You were confirmed ugly at: "+d+" specifically at: "+d.getHours()+" Hours.");

let elem = document.getElementsByClassName("time");
//elem[1].innerHTML = "Wait, What?";
var elem1 = document.getElementById("image");
elem1.src = "red.jpg";

//document.body.style.color = "749812";
elem[1].style.color = "red";

var p = document.createElement("p");	//Creates New Element
var node = document.createTextNode("Additional Info");

p.appendChild(node);
var elem2 = document.getElementsByClassName("under");
elem2[0].appendChild(p);
//elem2[0].removeChild(p);  		//Removes Element
//p.parentNode.removeChild(p);

// var node = document.createTextNode("New Info");
// elem2[0].replaceChild(node,p);

function func(){
	alert("Yes,Master?");
}

function validate(){
	var ozzy = document.getElementsByClassName("algo");
	var fozzy = document.getElementsByClassName("form");
	if(ozzy[0] == "lifestyle"){
		//fozzy.form.action = "https://cmpe.sjsu.edu/profile/haluk-ozemek";
		alert("ozzy!!!");
	}
}


var images = [
  "http://www.sololearn.com/uploads/slider/1.jpg",
  "http://www.sololearn.com/uploads/slider/2.jpg",
  "http://www.sololearn.com/uploads/slider/3.jpg"
];
 var num = 0;

function next() {
 var slider = document.getElementById("slider");
 num++;
 if(num >= images.length) {
   num = 0;
 }
 slider.src = images[num];
 console.log("End of Next");
 }

function prev() {
 var slider = document.getElementById("slider");
 num--;
 if(num < 0) {
   num = images.length-1;
 }
 slider.src = images[num];
}



function whoKnows(){
	right = false;
	left = false;
	down = false;
	up = false;
}

var color = 1;
var wheel = false;


function setIKnow(){
	if(!wheel){
		wheel = true;
		setInterval(iKnow,1);	
	}
	else if(wheel){
		wheel = false;
		clearInterval();
		document.getElementById("box").style.background = "orange";
		document.getElementById("container").style.background = "blue";
	}
	
}
function iKnow(){
	if(wheel){
		num += 1
		color = num*467%5;
		console.log(color);

		if(color == 0){
			document.getElementById("box").style.background = "lime";
			document.getElementById("container").style.background = "DeepPink";
		}
		if(color == 1){
			document.getElementById("box").style.background = "red";
			document.getElementById("container").style.background = "white";
		}
		if(color == 2){
			document.getElementById("box").style.background = "black";
			document.getElementById("container").style.background = "indigo";
		}
		if(color == 3){
			document.getElementById("box").style.background = "pink";
			document.getElementById("container").style.background = "aqua";
		}
		if(color == 4){
			document.getElementById("box").style.background = "yellow";
			document.getElementById("container").style.background = "RoyalBlue";
		}
	}
	
	
}
var pipe = 50;
var vid = document.getElementById("trance");

function setWheel(){
	bubble.innerHTML = "Piped";
	vid.play();
	setInterval(reinventingTheWheel,5);
}
function reinventingTheWheel(){
	pipe++;
	document.getElementById("box").style.width = pipe+"px";
	document.getElementById("box").style.height = pipe+"px";

}

var chaos = document.getElementById("aris");
chaos.addEventListener("click",whoKnows);

var smozzy = document.getElementById('udit');
smozzy.addEventListener("click",setIKnow);

var bubble = document.getElementById("lifestyle");
bubble.addEventListener("click",setWheel);

//NO DoCUMENTATION NEEDED


//BOX
var t = setInterval(move,50);
// starting position
var pos = 0; 
var vert = 0;
var right = false;
var down = false;
var left = false;
var up = false;
//our box element
var box = document.getElementById("box");

function moveRight(){
	pos += 3;
   	box.style.left = pos+"px";
}

function moveDown(){
	vert +=3;
	box.style.top = vert+"px";
}

function moveLeft(){
	pos -=3;
	box.style.left = pos+"px";
}

function moveUp(){
	vert -=3;
	box.style.top = vert+"px";
}

function move() {
	if(!right){
		moveRight();
		if(pos >= 150){
			right = true;
			down = false;
		}
	}
	if(right && !down){
		moveDown();
		if(vert >= 150){
			down = true;
			left = false;
		}
	}
	if(right && down && !left){
		moveLeft();
		if(pos <= 0){
			left = true;
			up = false;
		}
	}
	if(right && down && left && !up){
		moveUp();
		if(vert <= 0){
			up = true;
			right = false;
		}
	}
}
//END OF BOX