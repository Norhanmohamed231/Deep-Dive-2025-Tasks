let fullName = " Norhan Mohamed " ;
console.log(`Number of character : ${fullName.length}`);
let newFullName = fullName.trim();
console.log(newFullName.length);
console.log(`convert full name to Uppercase => ${fullName.toUpperCase()} `);
console.log(`convert full name to Lowercase => ${fullName.toLowerCase()} `)
console.log(fullName.toLowerCase().includes('mohamed'));

let fruits = ['apple' , 'banana' , 'mango'];
fruits.push('orange');
fruits.unshift('Kiwi');
fruits.pop();
fruits.shift();
console.log(fruits);
console.log(`index of mango : ${fruits.indexOf('mango')}`);

let fruitsTouppercase= fruits.map(fruits => fruits.toUpperCase() );
console.log(fruitsTouppercase);
let fruitsStartOf_b=fruits.filter(fruits=>fruits.toLowerCase().startsWith('b'));
console.log(fruitsStartOf_b);

fruits.forEach((fruits,index)=>{
    console.log(`fruit ${index} is ${fruits}`)
});

console.log(Math.floor(Math.random(1,10)*10+1));
let num1=5.1;
let num2=5.6;
//round
console.log(`num1 use round ${Math.round(num1)}`);
console.log(`num2 use round ${Math.round(num2)}`);
//trunc
console.log(`num1 use trunc ${Math.trunc(num1)}`);
console.log(`num2 use trunc ${Math.trunc(num2)}`);
//floor
console.log(`num1 use floor ${Math.floor(num1)}`);
console.log(`num2 use floor ${Math.floor(num2)}`);
//ceil
console.log(`num1 use ceil ${Math.ceil(num1)}`);
console.log(`num2 use ceil ${Math.ceil(num2)}`);
//max , min ,square
console.log(`Square of 64 is : ${Math.sqrt(64)}`);
console.log(`max number is ${Math.max(3,8,20,1)}`);
console.log(`min number is ${Math.min(3,8,20,1)}`);

//ternary operator
let age =20;
age >= 18 ?console.log("Adult") : console.log('Minor') ;

//object
let person={
    name : 'norhan',
    age :22 ,
    address :'zagazig',
    displayInfo(){
        console.log(`name is ${person.name} ,age is ${person.age} and address is ${person.address}`);

    },
    contact:{
        phone : '+0201167897012',
        email:'mnto@gmail.com',
        displayContact(){
            console.log(`phone is ${this.phone} and email is ${this.email} `);
    }
    }
}
person.displayInfo()
person.contact.displayContact();
person['address'] = 'Cairo';
person.displayInfo();

//destructing
let {name:Name,age:Age,contact:{phone:Phone}}=person;
console.log(Name);
console.log(Phone);
console.log(Age);

let [apple,banana]=fruits
console.log(apple);
console.log(banana);

//spread,rest operators
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let mergeArr =[...arr1,...arr2];
console.log(mergeArr);

function restFunc(...num){
    let sum=0
    num.forEach(i=>sum+=i);
    console.log(`sum of numbers equal ${sum}`)
}
restFunc(3,10,7);

let personalName ='Nada';
let personalAge =17;
console.log(`Hello ${personalName},you are ${personalAge} years old`)







