// loops 

for(let i = 0; i<=10; i++){
  
  if (i==7){
    console.log("7 is my number")
  }
  console.log(i)

}

for(let i=0;i<=10;i++){
  console.log(`outer loop ${i} `)
  
  for(let j=0;j<=10;j++){
    console.log(`outer loop ${i} , inner loop ${j} `)


    
  }
}


// while loop
let arr = ["batman",'ironman','deadpool'];
for (let i=0 ; i<arr.length ; i++){
  console.log(arr[i])
}

let i =0
while (i<arr.length){
  console.log(arr[i])
  i = i+1
  
}


// let a = 111
// do{
//   console.log("its ",a)
//   a = a +1

// }

// while(a<=10)

// // for of

// let names = ["aayu","aaia","aaiyo","aaauie"]  ;
// for (const name of names){
//   console.log('names are cute for me',name)
// }

 
const map = new Map()
map.set('in',"India")
map.set('usa',"usa")
map.set('fr',"france")

for (const[key,value] of map){
  console.log(key,":-" ,value);
}

// const myobj ={
//   js:"javasc",
//   cpp: "c++",
//   rb: "rubby",
//   swift : "swift" 
// }

// for (const key in myobj ){
//   console.log(key ,myobj[key]);
// }


// const mycode = [1,3,45,67,23,89,12]

// const me = mycode.filter( (item)=> item>4)
// console.log(me)

// const numarr = [1,2,3,4,5,6,78,9,10];

// const mynum = numarr.filter( (item) => {
//   return item > 5});
// console.log(mynum);




// const cart = [1, 2,3 ]

// const shop = cart.reduce( function( acc){


// },0)

// practice of for adavance loops 

let arr = [1,2,3,4,5,6,7,8,11,33]

arr.forEach((num)=>{
  console.log("for each",num);

});


let p = arr.filter((num)=>num>1);
console.log("filter",p);

let s = arr.map((num)=>num*1);
console.log("map",s);

let o = arr.map((num)=>num*3).filter((num)=>num<9);
console.log("both",o);


let b = 5
let a = 10; 
if(a>b){
  console.log(true)
}

console.log(a>b);

let neq = [1,2,3,4,5,6,7,]
let count = 0

for(let i = 0; i<neq.length;i++){
  count = count + neq[i];
  
}

console.log(count)


let total = init

for(let i=0; i<nums.length; i++){
    total = fn(total, nums[i])
}

return total;