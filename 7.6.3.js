let string = prompt('Введите любое число (но не очень большое)');
let number = Number(string);
let arr = [];
for (let i = 0; i <= number; i++) {
    arr[i] = i;
}
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}