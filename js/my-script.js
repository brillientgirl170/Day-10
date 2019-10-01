// var btnElement=document.getElementById("btn");
// btnElement.onclick =function(){
//     alert('test');
//
// }

var btnElement=document.getElementById("btn");
btnElement.onclick =function(){
    var firstNameValue=document.getElementById('firstName').value;
    var lastNameValue=document.getElementById('lastName').value;
    var fullName=firstNameValue+" "+lastNameValue;
    document.getElementById('fullName').value=fullName;



}

var  additionBtn= document.getElementById("addition");
additionBtn.onclick=function() {
    var firstNumberValue = Number(document.getElementById("firstNumber").value);
    var secondNumberValue = Number(document.getElementById("secondNumber").value);
    var result = firstNumberValue+secondNumberValue;
    document.getElementById("result").value= result;
}
var  subtractionBtn= document.getElementById("subtraction");
subtractionBtn.onclick=function() {
    var firstNumberValue = Number(document.getElementById("firstNumber").value);
    var secondNumberValue = Number(document.getElementById("secondNumber").value);
    var result = firstNumberValue-secondNumberValue;
    document.getElementById("result").value= result;

}
var  multiplicationBtn= document.getElementById("multiplication");
multiplicationBtn.onclick=function() {
    var firstNumberValue = Number(document.getElementById("firstNumber").value);
    var secondNumberValue = Number(document.getElementById("secondNumber").value);
    var result = firstNumberValue*secondNumberValue;
    document.getElementById("result").value= result;

}
var  divisionBtn= document.getElementById("division");
divisionBtn.onclick=function() {
    var firstNumberValue = Number(document.getElementById("firstNumber").value);
    var secondNumberValue = Number(document.getElementById("secondNumber").value);
    var result = firstNumberValue/secondNumberValue;
    document.getElementById("result").value= result;

}
var  remainderBtn= document.getElementById("remainder");
remainderBtn.onclick=function() {
    var firstNumberValue = Number(document.getElementById("firstNumber").value);
    var secondNumberValue = Number(document.getElementById("secondNumber").value);
    var result = firstNumberValue%secondNumberValue;
    document.getElementById("result").value= result;

}


// var paragraphElement= document.getElementsByTagName("p");
// document.write(paragraphElement[4].innerHTML);

// for(var key in paragraphElement){
//     document.write(paragraphElement[key].innerHTML+"<br/>");
// }

// for(var key=0; key<paragraphElement.length; key++){
//     document.write(paragraphElement[key].innerHTML+"<br/>");
// }

// array declaration syntex....

// var data=new Array();
// var data1=Array();
// var data2=[];

// var a=[];
//
// a[0]=10;
// a[1]=20;
// a[2]=30;
//
// a['name']="Sumi";
// a['city']="dhaka";
// a['country']="bangladesh";

// document.write(a[2]);

// for (var key in a){
//     document.write(a[key]);
// }


document.write("<h3>Defination and calling of function</h3>");


// function demo(){
//     document.write("Hello Bangladesh"+"<br/>");
//
//     var firstName ="Sumi";
//     var lastName ="Akter";
//     var fullName = firstName+' '+lastName;
//     document.write(fullName);
// }
// demo();

// function demo(firstName, lastName){
//     // document.write("Hello Bangladesh"+"<br/>");
//
//     var fullName = firstName+' '+lastName;
//     document.write(fullName);
// }
// document.write("<br/>========================<br/>");
// demo('Sumi', 'Akter');
// document.write("<br/>========================<br/>");
// demo('Rumi', 'Akter');
// document.write("<br/>========================<br/>");
// demo('Sumon', 'Akon');



var data=[10, 20, 30];

// data[0]=10;
// data[1]=20;
// data[2]=30;

// for(var key in data) {
//     document.write(data[key] + "<br/>");
// }

// var paragraphElement =document.getElementsByTagName("p");
//     for(var key in paragraphElement){
//         document.write(paragraphElement[key].innerHTML+"<br/>");
//     }
var paragraphElement =document.getElementsByTagName("p");
for(var key=0; key<paragraphElement.length;key++){
    document.write(paragraphElement[key].innerHTML+"<br/>");
}


var firstName=  "Sumi";
var lastName=   "Akter";
var fullName= firstName +" "+ lastName;

// function myfunction(){
//     document.write(fullName);
//
// }
// myfunction();

function myfunction(firstName, lastName){
    document.write(fullName);

}
myfunction('firstName', 'lastName');


