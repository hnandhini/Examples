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
var month='september'
switch(month)
{
    case 'june':alert('month is june');
                break;
    case 'july':alert('month is july');
                break;
    case 'september':alert('month is september');
                break;
}
add2numbers();
function add2numbers()
{
    a=document.getElementById('valuea').value;
    b=document.getElementById('valueb').value;
    c=parseInt(a)+parseInt(b);
    console.log(c);
}