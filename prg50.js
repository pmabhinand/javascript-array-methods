a=[10,11,12,13,14,15]

//w a p to create a new array have square of elements in the given array

sq=a.map(num=>num**2)
console.log(sq);




//w a p to create a new array have cube of elements in the given array

cub=a.map(num=>num**3)
console.log(cub);




//w a p to create a new array with number <=13 then increment and number >13 then decrement
//[11,12,13,14,13,14]

b=a.map(num=>num<=13?num+1:num-1)
console.log(b);

