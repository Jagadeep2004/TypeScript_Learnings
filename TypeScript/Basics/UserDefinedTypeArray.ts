let fruits:string[]=['Apple','Orange','Banana'];

for(var index in fruits)
    console.log(fruits[index]);

// for (var i=0;i<fruits.length;i++)
//     console.log(fruits[i])
console.log()
fruits.sort()
for(var index in fruits)
    console.log(fruits[index]);

console.log()
fruits.push('Grapes')
for(var index in fruits)
    console.log(fruits[index]);

console.log()
fruits = fruits.concat(['Fig','Mango'])
for(var index in fruits)
    console.log(fruits[index]);

console.log()
console.log(fruits.indexOf('Fig'))

console.log()
let number1:number[]=[1,2,3,4,5,6]
number1.copyWithin(5,4)
for(var index in number1)
    console.log(number1[index]);