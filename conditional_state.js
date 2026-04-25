/*
if(condition)
{
    .....
}
*/

let age=prompt("Enter Your Age : ");
if(age!=null && age>=18)
{
  console.log("You are Eligible for Vote..");
}

//=============================================

/*
  if(condition){
    -----
  }
  else{
    -----
  }
*/

let age=prompt("Enter Your Age : ");
if(age!=null && age>=18)
{
  console.log("You are Eligible for Vote..");
}
else
{
  console.log("You are Not Eligible for Vote..");
}

//===============================================

/*
avg=87;
90-100  A Grade
80-89   B Grade
70-79   C Grade
<70     D Grade
*/
let avg=45;

if(avg>=90 && avg<=100)
{
  console.log("Grade A");
}
else if(avg>=80 && avg<=89)
{
  console.log("Grade B");
}
else if(avg>=70 && avg<=79)
{
  console.log("Grade C");
}
else
{
  console.log("Grade D");
}

//=============================

//Nested If Statement
/*
if(cond)
{
  if(cond)
  {
    ---
  }
}

min mark >=35
  91-100 A
  81-90 B
  71-80 C
  D
*/

let english=95,tamil=98,maths=75;
let total,avg;
total=english+tamil+maths;
avg=total/3;
console.log("Total   : "+total);
console.log("Average : "+avg.toFixed(2));

if(english>=35 && tamil>=35 && maths>=35)
{
  console.log("Result  : Pass");
  if(avg>90 && avg<=100){
    console.log("Grade   : A Grade");
  }else if(avg>80 && avg<=90){
    console.log("Grade   : B Grade");
  }else if(avg>70 && avg<=80){
    console.log("Grade   : C Grade");
  }else{
    console.log("Grade   : D Grade");
  }
}
else
{
  console.log("Result  : Fail");
  console.log("Grade   : No Grade");
}