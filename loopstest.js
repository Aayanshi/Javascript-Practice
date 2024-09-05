// question 1.  Print the numbers from 12 to 24.

for (let i = 12; i<=24 ; i++){
  console.log(i)
}

// question 2. Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays it.
for(let i=0; i<=15; i++){
  if(i==0){
    console.log(`0 is neither even nor odd`)
  }else if(i%2==0){
    console.log(`${i} the number is even `)

  } else{
    console.log(`${i} the number is odd `)
  }
};

// question 3. Iterate through all numbers from 1 to 45. Print the following:

// For multiples of 3 print “Fizz”
// For multiples of 5 print “Buzz”
// For multiples of 3 and 5 print “FizzBuzz”

for(let i=1; i<=45; i++){

 if(i%3==0 && i%5==0){
  console.log(`:- ${i} fizzbuzz `)
 }else if(i%3==0){
    console.log(`${i}:- fizz`)

  }else if(i%5==0){
    console.log(`${i}:-buzz `)
  }

};


// question 4. Print all the elements of the following array
// var Aainu_Array = ["element1", "element2", "element3", "element4"];

var arr = ["element1", "element2", "element3", "element4"];

// for (const a of arr){
//   console.log(a)
// }

for (key in arr){
  console.log(arr[key])
}


// question 5.  Calculate the sum of all the numbers in the following array
// var AayunumsArray = [1,13,22,123,49]
let e = 0;
var ays = [1,13,22,123,49]
for (let i=0; i<ays.length; i++){
  e = ays[i]+ e;
}
console.log(e)

ays.forEach( function(item){
  console.log("here is",item *item )
})


ays.forEach( (item)=>{
  console.log("here is",item *item )
})

function multiply(a){
  console.log(a*a)
}

ays.forEach( multiply);

multiply(2)

function print(){
  console.log("me the best")
}

print()

