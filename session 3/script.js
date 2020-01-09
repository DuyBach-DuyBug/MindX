// Study
// ===1
/*
let a = 1;
let b = 2;
console.log(a,b)
// cach 1
let tmp;
tmp = a;
a = b;
b = tmp;
// cach 2
b = [a, a = b][0];
console.log(a , b)
*/

// ===2
/*
const s = 'Hello beauty there';
const a = s.split(" ");
console.log(a);
*/

// ===3
/*
const a = [4, 5, 7, -8];
console.log(a);
console.log(...a);
*/

// ===4
/*
let shop_data = ['Jeans','T-Shirt','Socks']
while(true){
    let user_input = prompt('Hi there, welcome to shop admin panel, what do you want(C,R,U,D)').toUpperCase();  
    if(user_input === 'C'){
       let new_name = prompt('Enter the name of the new item');
       alert('Done'); 
       shop_data.push(new_name);     
    } else if(user_input === 'R'){
        console.log('The current items are:');
        shop_data.forEach(function(value, index){
            console.log(`${index +1}. ${value}`);
        })
    } else if(user_input === 'U'){
        let index_item = prompt('Enter the position you want to update');
        let new_value = prompt('Enter the new name');
        shop_data[index_item - 1] = new_value;
        alert('Done');
    } else if(user_input === 'D'){
        let index_item = prompt('Enter the position you want to delete');
        shop_data.splice(index_item - 1,1);
        alert('Done');
    } else{
        alert('This command is not supported');
    }
}
*/

// ===5
/*
let user_input = prompt('Enter a squence of Number, separated by commas (,)');
let array_input = user_input.split(',').map(Number);
let sum = array_input.reduce((a, b) => a + b, 0);
alert('The sum of them is '+ sum)
*/

// ===6
/*
let user_input = prompt('Enter a squence of Number, separated by commas (,)');
let array_input = user_input.split(',').map(Number);
let smallest = Math.min(...array_input);
alert('The smallest number is '+ smallest);
*/

// ===7
/*
const arr = [3, 4, 6, -9, 10, -88, 2];
let user_input = Number(prompt('Enter a number'));
let pos = arr.indexOf(user_input);
if(pos >=0 && pos <= arr.length){
    alert(user_input + ' is FOUND in my array at index '+ pos);
} else{
    alert(user_input +' is NOT found in my array');
}
*/

// ===8
/*
let sheeps = [3,5,56,87,23,76,345,9];
console.log('Hello, my name is Bach and here is my sheep sizes:');
console.log(...sheeps);
console.log("Now my biggest sheep has size " + Math.max(...sheeps) + ", let's shave it" );
console.log('After shearing, here is my flock');
sheeps[sheeps.indexOf(Math.max(...sheeps))] = 8;
console.log(...sheeps)
console.log('')
let sum;
for(let i =1; i < 4;i++){   
    console.log('MONTH '+ i);
    console.log('One month has, passed, my sheeps have grown, here are their sizes');
    sheeps.forEach(function(index,value){
        return sheeps[value] += 50;
    })
    console.log(...sheeps)
    console.log("Now my biggest sheep has size " +Math.max(...sheeps) + ", let's shave it" );
    console.log('After shearing, here is my flock');
    sheeps[sheeps.indexOf(Math.max(...sheeps))] = 8;
    console.log(...sheeps)
    console.log('');
    sum = sheeps.reduce((a, b) => a + b, 0);
}
console.log('My flock has size in total: '+sum)
console.log('I would get 1010 * 2$ = '+sum*2);
*/

// ===9
/*
clear()
const colors = ['red', 'gray', 'blue', 'purple', 'cyan'];
let long = 50;
for(let a=0; a< 4;a++){
    color(colors[a]);
    long += 50;
    for(let i=0;i<4;i++){
        fd(long);
        rt(90);
    }
}
*/
