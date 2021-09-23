alert('This message is loaded from test.js on to the alert screen');
console.log("This is console log");
document.write("This is document write and put in html dynamically");
document.getElementById('main').innerHTML="Dynamically Printed onto the DOM Tree";
var a;
console.log(a);//undefined
var b=null;
console.log(b);//null
var c=false;
console.log(c);//boolean
var d='haritha123'
console.log(d);//Strings
var e=122;
console.log(e);//number
var trainer={
    "name":"Jacob Dennis P",
    "is_employed":true,
    "age":98,
    "ca":null,
    "status":"working"
}