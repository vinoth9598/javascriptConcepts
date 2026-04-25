/*
switch(choice)
{
  case choice:
    -----
    break;
  case choice:
    -----
    break;
  default:
    ----
    break;
}
*/

let num=5;

switch(num)
{
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  case 3:
    console.log("Three");
    break;
  default:
    console.log("Invalid Input");
    break;
}

//======================
//combine cases 
let letter='p';

switch(letter)
{
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
  case 'A':
  case 'E':
  case 'I':
  case 'O':
  case 'U':
    console.log(letter+" is an Vowel");
    break;
  default:
    console.log(letter+" is not a Vowel");
    break;
}