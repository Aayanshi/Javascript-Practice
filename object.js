// objects


const mysym = Symbol("key1")
let oneobj = {
  name:"aaina",
  mysym:"myk1",
  height : 5.5,
  age: 23,
  email:"aainagmail.com",
  location: "Delhi"
}

console.log(oneobj.name)
console.log(oneobj["email"])


function obj(val){
  return {
    add(val1){
      let a = val + val1
      return a
    } 
  } 

}

obj()

console.log(obj(2).add(6))


function myself(name){
  
  
  function profile(job){
    console.log(`my ${name} and i m ${job}`)
    return true 
  }

  function location(){
    return false 
  }

  return obj={
      profile,location
  }
}
let a =myself("aaina")
console.log(a.profile("dev"))

