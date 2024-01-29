//nested array

//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// print all employee name 

console.log('all employee name');
employee.map(emp=>emp[1]).forEach(emp=>{console.log(emp);})

console.log('----------------------------------');


//print total number of employee

console.log('total number of employee');
console.log(employee.length);


//print developer employee details

console.log('developer employee details');
developer=employee.filter(emp=>emp[2]=='developer')
console.log(developer);

console.log('-----------------------------');


//print developer employee name

console.log('developer employee name');
employee.filter(emp=>emp[2]=='developer').forEach(emp=>{console.log(emp[1]);})

console.log('--------------------------------');


//print details of employee laisha

console.log('details of employee Laisha');
z=employee.filter(emp=>emp[1]=='Laisha')
console.log(z);

console.log('---------------------------------');


//print the employ name whose have the highest salary

console.log('employ name whose have the highest salary');
highestsal=employee.reduce((emp1,emp2)=>emp1[4]>emp2[4]?emp1:emp2)
console.log(highestsal[1]);

console.log('--------------------------');




//print the employ name whose have the least salary

console.log('employ name whose have the highest salary');
lowestsal=employee.reduce((emp1,emp2)=>emp1[4]<emp2[4]?emp1:emp2)
console.log(lowestsal[1]);

console.log('---------------------------------');



//print the total salary

console.log('total salary');
total=employee.map(sal=>sal[4]).reduce((sal1,sal2)=>sal1+sal2)
console.log(total);


