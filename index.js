//My first JavaScript code

//declare a variable

//objects.Object person has an name and age

let person={

	name: 'Sheila Kioko',
	age: 23,
	school: 'Egerton University'
}

//acccesing the properties of an object

//1.using the dot notation

person.name='Kioko';

//2.using brackets

person ['name']='Abby';

let selection='name';

person[selection]='Sharon';

//Arryas-type of object too.A data structure used to represent a list of items

let selectedColors=["Yellow","Blue","Green"];
selectedColors[3]="Orange";
selectedColors[6]="Magenta";

//Functions
function greetings(fName,lName){



 //console.log("Hello" +" "+ fName +" "+lName);
}
greetings('Sheila','Kioko');

//function that calculates a value

function addNum(num1,num2){
	let sum=num1+num2;

	console.log(sum);
}

//conditional statements

//let a=10;
//let c=30;

//if(a<c){

	//let sum=a+c;
	//document.write('The sum is ',sum);
//}else{
	//document.write('value not valid');
//}

//operator precedence

var r=(10+10)*20;

//console.log(r);

//comparison
//=Assignment
//==Equality
//===strict equality

//var d=20;
//var f="20";

//if(d=f){
	//console.log('they are equal');
//}else{
//	console.log('they are not equal');
//}

//increment/decrement

/*var q=10;
q++;
console.log(q);*/

//ternary

/*var a=10;
var b=30;

var c=(a>b) ? console.log("true") : console.log("false");*/

//switch staements
//In computer programming languages, a switch statement is a type of selection control mechanism
// used to allow the value of a variable or expression to change the control flow of program execution via 
//a multiway branch.


/*
switch(fruit){
	case "mango":
	console.log("mango is 30bob");
	break;

	case "banana":
	console.log("banana is 40bob");

	break;

	case "orange":
	console.log("orange is 5bob");

	break;

	case "pineapple":
	console.log("pineapple is 90 bob");
	break;

	default:
	console.log("fruit is not available");
}*/

//loops-perform an action over and over again

//var count=0;

//while loop

/*while(count<10){
	console.log("Hello World");
	count ++;

}
do{
	console.log("this is do-while loop");
	count++;
}while(count<5);*/

//for-loop

/*f(count=0; count<10 ; count++){
	console.log("This is a for")
}*/

function calc(){
	var w=document.getElementById("width").value;
	var h=document.getElementById("height").value;

	var area=w*h;
	document.getElementById ("answer").value=area;
}

var studentName=[20,30,10,67
];

studentName.toString();

console.log(studentName);

var num="45";

var convertToNumber=Number(num);

console.log(convertToNumber);