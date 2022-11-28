var huvisagch=1;
console.log(huvisagch);
var huvisagch1="utga";
console.log(huvisagch1);
var huvisagch2=true;
console.log(huvisagch2);
var huvisagch3=undefined;
console.log(huvisagch3);
var huvisagch4=null;
console.log(huvisagch4);

let o; 
console.log(o) 

var p;
p="k"
console.log(p)

var firstName, lastName,  maritalStatus, country, age;

var firstName;
var lastName;
var maritalStatus;
var country;
var age;

var myAge=23;
var yourAge=30;

var a=10;
var b=15;
var c=12;
console.log("Traingle perimeter is", a+b+c)

var r=10;
const pa = 3.14;
console.log("Circle area is", pa*r*r)

function myfunction(y1,y2,x1,x2){
    m=y2-y1/x2-x1
    return m;
}
console.log("m",myfunction (3,5,7,8))

function bit(g){
    const bits = 1024;
    m=bits*g;
    k=bits*m;
    x=bits*k;
    return x;
}
console.log("x GB to bit =", bit(15),"bit");

var Mb=15;
var bit=Mb*1024**3;
var bitrate=bit/3;
console.log("15Mb to bitrate", bitrate);

function traingleArea (a,b,c){
    A=0.25*Math.sqrt(4*a**2*b**2-(a**2+b**2-c**2)**2)
    return A
}
console.log("Traingle area from three side A is", traingleArea(3,4,5))

// Celsius to fahrenheit
var cel=10
var far=9/5*cel+32
console.log(cel,"celsius to fahrenheit",far,"F")

// Fahrenheit to celsius
var far=10
var cel=9/5*(far-32)
console.log(far,"fahrenheit to celsius",cel,"C")

// Math expressions
var x=5
var y=3

var a=x+y
var b=x-y
var c=x*y
var d=x/y
var e=x%y
console.log("Addition of given 2 number is",a)
console.log("Subtraction of given 2 number is",b)
console.log("Multiplication of given 2 number is",c)
console.log("Division of given 2 number is",d)
console.log("Fraction of given 2 number is",e)

// cm to inch, inch to cm
var cm=10;
var inch=cm/2.45
console.log(cm,"cm to inch is",inch)
var inch=15;
var cm=inch*2.54;
console.log(inch,"inch to cm is",cm)

