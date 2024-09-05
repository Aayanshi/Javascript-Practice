// 1. question1 Square the value of every element in the array.
// const aru = [1, 2, 3, 4, 5]; 
// {ans. [ 1, 4, 9, 16, 25 ]}

const aru = [1, 2, 3, 4, 5]; 

let h = aru.map((num)=> {
  return num*num
});
console.log(h)

// 2. In the array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.
// const ary = [1, -4, 12, 0, -3, 29, -150]  (ans. 42)

const ary = [1, -4, 12, 0, -3, 29, -150]

let a = ary.filter((num)=> num > 0).reduce((acc,curr)=>{
  return acc + curr
} ,0);

console.log(a);

// 3. Calculate the mean and median values of the number elements from the given array.
//     {ans. mean: 38.5, median: 39 }

// const ar = [12, 46, 32, 64];
// let b = ar.reduce((acc,rec)=>{
//   return (acc+rec)/2
// },0)



// function median(arr){
// }

// const ar = [12, 46, 32, 64, 90];
// let arr = ar.length
// let ari = ar.sort()
// let p , n , q = 0


// //even
// if(arr%2==0){
//     p = arr/2
//     n = arr/2 -1
//     q = (ari[n]+ari[p])/2
//   console.log(ari[p],ari[n],q,"median")
// //odd
// }else{
//   console.log(ar[(arr-1)/2],"odd")
// }

// let non = ar.reduce((acc,curval )=>{

// })




// q4. 4. The string of multiple words with a single space between each of them is given. Abbreviate the name and return the name initials.
// const strr = "Aaina Rude Jiddi Sharma";  {ans "ARJS"}

const strr = "Aaina Rude Jiddi Sharma";
let ajk = strr.
          split(" ")
          .map(function(word){
            return word[0]
          })
          .join("")

console.log(ajk)



const ari = [12, 46, 32, 64];
ari.sort((a, b) => a - b);

const res = ari.reduce(
  (accumulator, currentValue, index, array) => {
    accumulator.mean += currentValue / array.length;

    if (array.length % 2 === 0) {
      // if the array has an even number of elements
      if (index === array.length / 2 - 1) {
        accumulator.median += currentValue;
      } else if (index === array.length / 2) {
        accumulator.median += currentValue;
        accumulator.median /= 2;
      }
    } else {
      // if the array has an odd number of elements
      if (index === (array.length - 1) / 2) {
        accumulator.median = currentValue;
      }
    }

    return accumulator;
  },
  { mean: 0, median: 0 }
);

console.log(res)