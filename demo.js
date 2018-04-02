document.write("Hey,it Worked<br>");
var y=35;
//document.write(y);
var name="Screw You";
document.write(name);

function print(nombre){
	document.write("<br>"+nombre+", Screw You");
}
//print("Ozemek");

//alert("Click OK if you're good <br> with being ugly");

var user = prompt("Please Enter Your Name","Sir Dipshit");
print(user);

user = confirm("Are you really this ugly?");
if(user){
	alert("I'm glad we can agree");
}
else{
	alert("Stop lying to yourself");
}

function person(name,age,uglyness){
	this.name = name;
	this.age = age;
	this.ugly = uglyness;
	this.DoB = getBorn;
}

var p1 = new person(user,y,100);
document.write("<br>"+p1.ugly+" out of 100 uglyness");

function getBorn(){
	return 2018 - this.age;
}

document.write(p1.DoB());