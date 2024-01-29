sentence='good afternoon all'
//w a p to print all vowels in the given sentence
//output - o o a e o o a

vowels=['a','e','i','o','u','A','E','I','O','U']
console.log(vowels);

character=sentence.split('')


for(let char of character){
    if(vowels.includes(char)){
        console.log(char);
    }
}

console.log('---------------------------------');



//using array method


Array.from(sentence).filter(char=>vowels.includes(char)).forEach(item=>console.log(item))

console.log('-------------------------------------');


