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

var p1 = new person(user,100);
document.write("<br>"+p1.ugly+" out of 100 uglyness");
document.write("<br>"+p1.siblings[0]);

function getBorn(){
	return 2018 - this.age;
}

document.write("<br>"+p1.DoB()+Math.sqrt(4));

// function bug(){
// 	alert("Hi");
// }
// setInterval(bug,5000);

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
	pos += 5;
   	box.style.left = pos+"px";
}

function moveDown(){
	vert +=5;
	box.style.top = vert+"px";
}

function moveLeft(){
	pos -=5;
	box.style.left = pos+"px";
}

function moveUp(){
	vert -=5;
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

//NO DoCUMENTATION NEEDED
