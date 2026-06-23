function add(a:string,b:string):string
function add(a:number,b:number):number
function add(a:string,b:number):string

function add(a:any,b:any):any{
    return a+b
}
console.log(add("Hello","All"))
console.log(add(5,10))
// console.log(add(1,"hello"))


