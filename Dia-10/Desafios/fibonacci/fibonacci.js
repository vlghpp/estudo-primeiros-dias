let array = [];
let a = 0;
let b = 1;

while(!array[9]){
    a = a + b;
    array.push(a);
    b = a + b;
    array.push(b)
}
console.log(array)