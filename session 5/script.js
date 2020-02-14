// 1
hello = () => {
    for(let i =0; i < 3; i++){
        console.log('hello world');
    }
}
hello();
// 2
sum = () => {
    let x  = prompt('X');
    let y = prompt('Y');
    let sum = Number(x) + Number(y);
    alert(sum)
}
sum();