numbers=[[10,20,[96,100]],[14,28,69],[11,21,[8,55,41]],[76,45,31]]

//find the numbers greater than 50

console.log(numbers.flat(Infinity).filter(num=>num>50));

console.log('-----------------------------------------');


//find the largest number

console.log(numbers.flat(Infinity).reduce((num1,num2)=>num1>num2?num1:num2));

console.log('---------------------------------');



//find the smallest number

console.log('smallest number');
console.log(numbers.flat(Infinity).reduce((num1,num2)=>num1<num2?num1:num2));
console.log('----------------------------------------');



//find the total number
console.log('total');
console.log(numbers.flat(Infinity).reduce((num1,num2)=>num1+num2));
console.log('-------------------------------------');

