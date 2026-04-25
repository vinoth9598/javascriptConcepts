/*
for (initialize variable; condition; statement) {
  // code to be executed
}
*/

for(let i=1;i<=10;i++)
{
  console.log(i);
}

let arr=[];
for(let i=0;i<100;i+=2)
{
  arr.push(i);
}
console.log(arr);
console.log(arr[49]);

// ==================================
//nested forloop

let nums=[];
for(let i=0;i<3;i++) //i=0 0<3 1<3
{
  nums.push([]); //nums[0] nums[1]
  for(let j=0;j<3;j++)
  {
    nums[i].push(j);//num[1]={0,1,2}
  }
}

console.log(nums);
console.table(nums);