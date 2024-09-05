
// login

function user(name){
  return `${name} just logged in`

}

let n = user("ken");
console.log(n);


// ---------------------------------------------------


function cal(...arg){
  return arg 

}

let func = cal(1,2,3,4,5)
console.log(func)

let meobj = {
  user : "aaina",
  password : "33XX667"
}

function profile(obj){
  console.log(`${obj.user} and its password ${obj.password}`)
}

profile(meobj)

profile({
  user : "ranu mandal",
  password : "khuch nhi"
})

const aree = [1,2,3,4,4,5,6,6,7,8]

function meraree(arr){
  return  arr[3]
}

// let me = meraree(aree)
let me = meraree([1,2,36,46,77,89])
console.log(me)


// function 



function counter(n){
  let a = 1 
  let b = 2
  n = a + b

  return n

}

let res = counter(0)
console.log(res)


//  the fuckin lexical scope 


function one(){

  let nam = "heyu";

  function second(){
    console.log(nam,"ssup 2")
    let hmm = "huh"

    function third(){
      console.log(nam,"ssup, how are you 3")
      // console.log(hmm , "chup raho")
    }
    third()
  }
 
  function second2(){
    // console.log(hmm , "chup raho")
  }
  second()
  second2()

}

one()


//  close up scope 

function close(){
  let name = "rajkumari"

  function noclose(){
    console.log("hey my name is ",name)
  }
  return noclose;
  
}

let apna = close()
apna()
console.log(apna) 

