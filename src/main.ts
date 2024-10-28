let username="john"
console.log(username)

let a=12
let b='6'
let c=2

let Str=['hi','hello','welcome']

let mixed=['oh','ushh',56]

//Str=mixed (couldnt add)
mixed=Str

//array type
let tup:[string,number,boolean]=['he',34,true]

let alb:(string|number)[]=['f',5]


//object type
type Guitarist={
    name:string,
    albums:string|number
}
let g:Guitarist={
    name:'dave',
    albums:5
}

//literal types
let user:'dave'|'harry'|'justin'
user='justin'


const logMsg=(message:any):void=>{
    console.log(message)
}
const add=(a:number,b:number):number=>{
    return a+b;
}

//optional params
// const addAll=(a:number=2,b:number,c?:number):number=>{
//   if(c)
//    return a+b+c;
//   return a+b
// }

 type math=(a:number,b:number,c?:number)=>number

// interface math{
//     (a:number,b:number,c?:number):number
// }
const addAll:math=(a,b,c):number=>{
  if(c)
   return a+b+c;
  return a+b
}


logMsg(add(3,4))
logMsg(addAll(35,5))
