// Array in javascript 

let a=[10,20,30,40];
console.log(a);
console.table(a);
console.log(a[1]);

let b=new Array(10,20,30,40);
console.table(b);

let c=new Array("Joes",30,true,{m1:100,m2:75,m3:65});
console.table(c);
//=====================================

//forEach 
const number=[1,2,30,4,5,6,7,8,9,10];
//value,index,array
number.forEach((value)=>{
  console.log(value);
});

number.forEach((value,index)=>{
  console.log("Index : "+index+" Value: "+value);
});

const users =[
  {full_name:"Ram",age:12,city:"Salem",salary:10000},
  {full_name:"Sam",age:15,city:"Chennai",salary:10500},
  {full_name:"Ravi",age:22,city:"Namakkal",salary:12000},
  {full_name:"Joes",age:18,city:"Hosur",salary:6000},
  {full_name:"Aureen",age:47,city:"Dharmapuri",salary:10000},
  {full_name:"Stanley",age:10,city:"Salem",salary:8000},
];

console.table(users);

users.forEach((value)=>{
  console.log(value.full_name);
});
//=================================================
// map

const numbers=[1,2,3,4,5,6,7,8,9,10];

//map(value,index,array)
let sqrt=numbers.map((value)=>{
    return Math.sqrt(value).toFixed(2);
});

console.table(sqrt);

const users =[
  {name:"Sam",age:15,city:"Chennai",salary:10500},
  {name:"Ravi",age:22,city:"Namakkal",salary:12000},
  {name:"Joes",age:18,city:"Hosur",salary:6000},
  {name:"Aureen",age:47,city:"Dharmapuri",salary:10000},
  {name:"Stanley",age:10,city:"Salem",salary:8000},
  {name:"Ram",age:12,city:"Salem",salary:10000},
];

console.table(users);

let eligible_status=users.map((user)=>({
  /*name:user.name,
  age:user.age,
  city:user.city,
  salary:user.salary,*/
  ...user,
  status:user.age>=18?"Eligible":"Not Eligible"
}));

console.table(eligible_status);
//====================================================
//slice 
const numbers=[1,2,3,4,5,6,7,8,9,10];

//slice(start,end)
console.log(numbers);
console.log("Slice :"+numbers.slice());
console.log("Slice(2) :"+numbers.slice(2));
console.log("Slice(2,5) :"+numbers.slice(2,5));

//===============================================
//splice 
const n1=[1,2,3,4,5,6,7,8,9,10];

console.log("Before Splice : "+n1);
let removed_elements=n1.splice(2);
console.log("Removed Items : "+removed_elements);
console.log("After Splice :"+n1);


const n2=[1,2,3,4,5,6,7,8,9,10];
console.log("Before Splice : "+n2);
removed_elements=n2.splice(2,2);
console.log("Removed Items : "+removed_elements);
console.log("After Splice :"+n2);


const n3=[1,2,3,4,5,6,7,8,9,10];
console.log("Before Splice : "+n3);
removed_elements=n3.splice(2,2,[25,36,45]);
console.log("Removed Items : "+removed_elements);
console.log(n3);

const n4=[1,2,3,4,5,6,7,8,9,10];
console.log("Before Splice : "+n4);

n4.splice(2,0,100,300);
console.log("After Splice :"+n4);

//====================================================
//concat

const a=[10,20,30];
const b=[40,50,60];
const c=[70,80,90];

let d=a.concat(b);
console.log(d);

d=a.concat(b,c);
console.log(d);

d=a.concat(b,c,25,35,45,55);
console.log(d);

d=a.concat(b,c,25,35,45,55,['a','b','c']);
console.log(d);

console.table(d);

//==============================================
//Sort 

const names=["Kumar","Aureen","Joes","Zara","Stanley"];
console.log("Before Sort : "+names);
names.sort();
console.log("After Sort : "+names);

const num=[10,100,25,150,45,80,9];
console.log("Before Sort : "+num);
num.sort();
console.log("After Sort : "+num);

num.sort((a,b)=>{
  return a-b;
});
console.log("Asc Compare Sort : "+num);
num.sort((a,b)=>{
  return b-a;
});
console.log("Desc Compare Sort : "+num);

const users =[
  {name:"Ram",age:12,city:"Salem",salary:10000},
  {name:"Sam",age:15,city:"Chennai",salary:10500},
  {name:"Ravi",age:22,city:"Namakkal",salary:12000},
  {name:"Joes",age:18,city:"Hosur",salary:6000},
  {name:"Aureen",age:47,city:"Dharmapuri",salary:10000},
  {name:"Stanley",age:10,city:"Salem",salary:8000},
];
console.table(users);

users.sort((a,b)=>{
  return a.age-b.age;
});
console.table(users);

users.sort((a,b)=>{
  if(a.name>b.name) return 1;
  if(a.name<b.name) return -1;
  return 0;
});

console.table(users);

//======================================
//fill
let n=[1,2,3,4,5,6]

console.log("Before Fill : "+n);
//n.fill(20);
//n.fill(20,3)
n.fill(20,3,5);
console.log("After Fill  : "+n);

//===========================================
//includes
const products = ["Pen", "Pencil", "Eraser", "Box", "Pen"];
let result = products.includes("Pen");
console.log(result);
result = products.includes("Scale");
console.log(result);
result = products.includes("Pencil", 2);
console.log(result);

//=============================================
//join()

//array.join(separator)
const products = ["Pen", "Pencil", "Eraser", "Box"];
console.log(products);

console.log(products.join()); //Deafult , as Separator
console.log(products.join('|')); // Pipe | as Separator

//=============================================
//reverse 

const n = [1, 2, 3, 4, 5, 6];
console.log("Before Reverse : ", n);
n.reverse();
console.log("After Reverse : ", n);

//Array Element With Length Property
const x = { 0: 10, 1: 20, 2: 30, 3: 40, length: 4 };
console.log(x);

Array.prototype.reverse.call(x);
console.log(x);

//===============================================
//push

let n = [1, 2, 3, 4, 5]
console.log(n);
console.log(n.push(60));
console.log(n);
console.log(n.push(70, 85, 90, 100));
console.log(n);

let fruits = ["Apple"]
console.log(fruits);
fruits.push("Orange");
console.log(fruits);
fruits.push("Banana", "Pineapple");
console.log(fruits);

//Merging Two Arrays
let users1 = ["Ram", "Sam", "Ravi"];
let users2 = ["Rajesh", "Kumar"];

users1.push(...users2);
console.log(users1);

//===============================================

//POP in JavaScript.
const users = ['Ram', 'Sam', 'Ravi', 'Kumar'];
console.log(users);
console.log(users.pop());
console.log(users);
console.log(users.pop());
console.log(users);

//============================================
//shift

let students = ["Kumar", "Aureen", "Joes", "Zara", "Stanley", "Rajesh"];

console.log("Before shift : " + students);
let element = students.shift();
console.log("After shift : " + students);
console.log("Removed Element : " + element);


console.log("Before shift : " + students);
element = students.shift();
console.log("After shift : " + students);
console.log("Removed Element : " + element);

//================================================
//unshift
// Add First element at start
students = ["Kumar", "Aureen", "Joes", "Zara", "Stanley", "Rajesh"];
console.log("Before unshift : " + students)

let len = students.unshift("Tiya");
console.log("Length : " + len)
console.log("After unshift : " + students)

//Mulitiple Values
len = students.unshift("Riya", "Diya");
console.log("Length : " + len);
console.log("After unshift : " + students);

//===========================================
//indexOf

students = ["Tiya", "Aureen", "Joes", "Zara", "Stanley", "Rajesh"];

let i=students.indexOf("Tiya");
console.log("Index : "+i);

let user="Tutor Joes";
let index=user.indexOf("o");
console.log("Index : "+index);

index=user.indexOf("o",5);
console.log("Index : "+index);

//===========================================
//lastIndexOf
students = ["Tiya", "Aureen", "Joes", "Zara", "Stanley","Tiya", "Rajesh"];

let i=students.indexOf("Tiya");
console.log(i);
i=students.lastIndexOf("Tiya");
console.log(i);

let address="Tutor Joes Cherry Road Salem Joes";
i=address.indexOf("Joes");
console.log(i);
i=address.lastIndexOf("Joes");
console.log(i);

//============================================
//every & some 

n = [12, 18, 10, 8];

let result=n.every((value)=>{
  return value%2==0;
});

console.log("All Elements are Even :" ,result);

result=n.some((value)=>{
  return value%2==0;
});

console.log("All Elements are Even :" ,result);
