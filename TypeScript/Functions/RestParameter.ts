function sum(a:number,...b:number[]){
    for(let i=0 ;i< b.length;i++){
        a+=b[i]
    }
    return a
}

console.log(sum(5,6))
console.log(sum(1,2,3,4,5))
