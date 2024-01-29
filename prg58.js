//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case 

console.log('district with high +ve cases');
high=covid_data.reduce((dis1,dis2)=>dis1[2]>dis2[2]?dis1:dis2)
console.log(high[1]);

console.log('---------------------------------');






//2. district having Highest 1st dose vaccine

console.log('district with highest 1st dose vacine');
high=covid_data.reduce((dis1,dis2)=>dis1[5]>dis2[5]?dis1:dis2)
console.log(high[1]);

console.log('-------------------------------------');







//3. district having lowest death rate

console.log('district with lowest death rate');
high=covid_data.reduce((dis1,dis2)=>dis1[3]<dis2[3]?dis1:dis2)
console.log(high[1]);

console.log('-------------------------------');








//4. sort data with +ve case in descending order

console.log('+ve case in descending order');
pos=covid_data.sort((dat1,dat2)=>dat2[2]-dat1[2])
console.log(pos);

console.log('------------------------------------');






//5. is district with +ve cases > 15000

console.log('is district with +ve cases > 15000');
pos=covid_data.some(dis=>dis[2]>15000)
console.log(pos==true?'yes':'no')

console.log('------------------------------')







//6. sort data with 1st dose vaccine in asecending

console.log('sort data with 1st dose vaccine');
pos=covid_data.sort((dat1,dat2)=>dat1[5]-dat2[5])
console.log(pos);

console.log('---------------------------------');





//7. Print Thrissur details

console.log('Print Thrissur details');
pos=covid_data.find(dat=>dat[1]=='Thrissur')
console.log(pos);

console.log('--------------------------------------');





//8. Print total number of positive cases

console.log('Print total number of positive cases');
pos=covid_data.map(pc=>pc[2]).reduce((pc1,pc2)=>pc1+pc2)
console.log(pos);

console.log('-----------------------------------');







//9. Print total number of curred cases

console.log('Print total number of curred cases');
pos=covid_data.map(pc=>pc[4]).reduce((pc1,pc2)=>pc1+pc2)
console.log(pos);

console.log('--------------------------------------');







//10. Print curred cases in Idukki

console.log('Print curred cases in Idukki');
pos=covid_data.find(dat=>dat[1]=='Idukki')
console.log(pos[4]);