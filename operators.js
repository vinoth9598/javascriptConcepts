//Arithmetic Operation
let a=100;
let b=20;
let c;
c=a+b;
c=a-b;
c=a*b;
c=a/b;
c=a%b;
c=2**3;//2016
c=++a;
c=--b;
console.log(c);

//==============================

//Assignment Operators
let a=10;
 
//a=a+5; //+=
a+=5;//15
a-=5;//10
a*=5;//50
a/=5;//50
a%=5;//0
console.log(a);

//==================================

//Comparison Operators
 
let a=10;
let b="25";
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);

//============================
//Relational Operators in JavaScript
 
/*
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
*/
 
let a=10;
let b=20;
 
console.log("Greater : ",a>b);
console.log("Lesser  : ",a<b);
console.log("Greater Than Equal  : ",a>=b);
console.log("Greater Than Equal  : ",a<=b);


//============================================
//Logical Operators in JavaScript 
/*
&&	logical and
||	logical or
!	  logical not
*/
//35-100
let mark=45;
 
console.log(mark>=35 && mark<=100);
 
let a=5;
//2,5
console.log(a==2 || a==5);
 
a=false;
console.log(!a);

//=========================================

//Bitwise Operators in js

//&
let a=12;//1100
let b=24;//11000

console.log(a&b);

//&=
a&=b;
console.log(a);


// | (Bitwise or)
a=12;//1100
b=24;//11000
console.log(a|b);

//|=
a|=b;
console.log(a);


// ~    ~a = -a-1
a=12;  //-25-1=-26
console.log(~a);

// ^
a=12;
b=6;
console.log(a^b);

//<<
a=5;
b=2;
console.log(a<<b);
a<<=b;
console.log(a);

//>>
a=8;
b=2;
console.log(a>>b);
a>>=b;
console.log(a);

// >>>
a=-11;
b=2;

