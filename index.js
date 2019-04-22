
/*
Exam 3 
Richard Siska 


*/
const jsonfile = require('jsonfile');
const fs = require('fs');

let data = fs.readFileSync('data.json');  
let obj = JSON.parse(data);  

for (var i=0; i<obj.items.length; i++){
    console.log(`${obj.items[i].fname} ${obj.items[i].age}`);
}

