//pr.js
let obj={
    name: 'Petr',
    age: 24
}
//деструкторизация
let {name,age}=obj;
console.log(name);
 //cd director
 // node pr
let men = {...obj}
men.name = 'Tead'
console.log(men);
//{ name: 'Tead', age: 24 }
let num=[1,2,3,4,5]
console.log(Math.max(...num));
let arr=num.map(item=>{return item+1})
console.log(arr);