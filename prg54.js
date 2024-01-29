fruits=['apple','mango','kiwi']
//find if 'mango' is present in the give array,if present print

//find
mango=fruits.find(f=>f=='mango')
console.log(mango);



//includes
mango1=fruits.includes('mango')
console.log((mango1?'yes':'no'));



//indexOf
console.log(fruits.indexOf('mango'));




//some

a=fruits.some(e=>e=='kiwi')
console.log(a);

