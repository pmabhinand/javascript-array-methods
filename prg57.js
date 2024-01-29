//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]

]

//1. display all product name
console.log('product names:');
prname=products.map(nam=>nam[1])
console.log(prname);

console.log('-----------------------------');






//2. display product whose price < Rs.50

console.log('price less than 50:');
price=products.filter(pr=>pr[2]<50)
console.log(price);

console.log('-------------------------------');






//3. print price of oreo

console.log('price of oreo:');
oreo=products.find(or=>or[1]=='oreo')
console.log(oreo[2]);

console.log('-------------------------------');






//4. print costly product name

console.log('costly product:');
costly=products.reduce((cos1,cos2)=>cos1[2]>cos2[2]?cos1:cos2)
console.log(costly[1]);

console.log('----------------------------------------');








//5. display out of stock product

console.log('out of stock product');
nosto=products.filter(ns=>ns[3]==0)
console.log(nosto);

console.log('--------------------------------');







//6. sort products based on stock in decsending order

console.log('descending order based on stock:');
des=products.sort((sto1,sto2)=>sto2[3]-sto1[3])
console.log(des);

console.log('-----------------------------------');








//7. print product having maximum available stock

console.log('product having maximum stock');
max=products.reduce((pro1,pro2)=>pro1[3]>pro2[3]?pro1:pro2)
console.log(max[1]);

console.log('-----------------------------------');






//8. is there any product that can be purchased by Rs. 10

console.log('product than can be purchased by 10');
pur=products.some(pro=>pro[2]<=10)
console.log(pur==false?'not available':'available');

console.log('--------------------------------------');









//9. Is there any product in the range of 10 to 30 rupees

console.log('product in the range of 10-30');
pur=products.some(pro=>pro[2]>=10 && pro[2]<=30)
console.log(pur==true?'available':'not available');

console.log('------------------------------------------');





//10. print all products in the range of 10 to 30 rupees

console.log('product in the range of 10-30');
products.filter(pro=>pro[2]>=10 && pro[2]<=30).forEach(item=>{console.log(item[1]);})
